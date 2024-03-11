const express = require("express");
const router = express.Router()
const User = require('../Model/user');
const Application = require('../Model/application');
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn } = require('../middleware')
const Admin = require('../Model/admin');
const passport = require('passport');



router.get('/admin', isLoggedIn, catchAsync(async (req, res) => {
    const users = await User.find()
    res.render('./admin/admin', { users })
}))

router.get('/application', isLoggedIn, catchAsync(async (req, res) => {
    const applicants = await Application.find()
    res.render('./admin/applicants', { applicants })
}))

router.get('/adminregisterwashingtonschool123456789', (req, res) => {
    res.render('./admin/register')
})
router.get('/adminlogin', (req, res) => {
    res.render('./admin/login')
})

router.post('/adminregister', catchAsync(async (req, res) => {
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
                res.redirect('/placement/admin')
            })

        }
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/placement/adminregisterwashingtonschool123456789')
    }

}))
router.post('/login', passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/placement/adminlogin',
    keepSessionInfo: true
}), (req, res) => {

    req.flash('success', "Welcome Admin");
    res.redirect('/placement/admin');
});

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success', "Goodbye!");
        res.redirect('/');
    });
})


router.get('/washingtonfirst/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            req.flash('error', "No user found");
            return res.redirect('/placement/admin');
        }
        res.render('./admin/form', { user });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/dc/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            req.flash('error', "No user found");
            return res.redirect('/placement/admin');
        }
        res.render('./admin/form2', { user });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/application/:id', isLoggedIn, async (req, res) => {
    try {
        const applicant = await Application.findById(req.params.id);
        if (!applicant) {
            req.flash('error', "No applicant found");
            return res.redirect('/placement/application');
        }
        res.render('./admin/applicantResult', { applicant });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router