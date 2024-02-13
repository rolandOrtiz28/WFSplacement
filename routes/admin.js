const express = require("express");
const router = express.Router()
const User = require('../Model/user');
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn } = require('../middleware')
const Admin = require('../Model/admin');
const passport = require('passport');



router.get('/admin', isLoggedIn, catchAsync(async (req, res) => {
    const users = await User.find()
    res.render('./admin/admin', { users })
}))

router.get('/adminregisterwashingtonschool123456789', (req, res) => {
    res.render('./admin/register')
})
router.get('/adminlogin', (req, res) => {
    res.render('./admin/login')
})

router.post('/adminregister', catchAsync(async (req, res) => {
    await Admin.deleteMany({})
    try {
        const { email, username, password } = req.body;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            req.flash('error', 'Password must contain at least one uppercase letter, one digit, and be at least 8 characters long');
            res.redirect('/placement/adminregisterwashingtonschool123456789');
            return
        }
        const existingUsername = await Admin.findOne({ username })
        if (existingUsername) {
            req.flash('error', 'Email or Username already exist');
            res.redirect('/placement/adminregisterwashingtonschool123456789');
        }
        const existingEmail = await Admin.findOne({ email })
        if (existingEmail) {
            req.flash('error', 'Email or Username already exist');
            res.redirect('/placement/adminregisterwashingtonschool123456789');
        }

        const confirmPassword = req.body['confirm-password'];
        if (password !== confirmPassword) {
            req.flash('error', 'password do not match');
            res.redirect('/placement/adminregisterwashingtonschool123456789');
        } else {
            const admin = new Admin({ email, username });
            const registeredUser = await Admin.register(admin, password);
            req.login(registeredUser, err => {
                if (err) return next(err);
                req.flash('success', `Welcome Admin ${username}`)
                res.redirect('/placement/adminlogin')
            })

        }
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/placement/adminregisterwashingtonschool123456789')
    }
    router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/adminlogin', keepSessionInfo: true }), (req, res) => {
        req.flash('success', "Welcome Admin")
        res.redirect('/placement/admin')
    })


}))







module.exports = router