const express = require("express");
const router = express.Router();
const User = require('../Model/user')
const nodemailer = require('nodemailer');
const catchAsync = require('../utils/catchAsync');

router.get('/examination', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/exam', { user: user });
})
router.get('/eylpt1', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/eylpt1', { user: user });
})
router.get('/eylpt2', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/eylpt2', { user: user });
})


router.post('/examination', catchAsync(async (req, res) => {
    const { userId, score, percentage, qualification } = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, {
            score: score,
            percentage: percentage,
            qualification: qualification
        });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.redirect('/thankyou');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));


router.post('/eylpt1', catchAsync(async (req, res) => {
    const { userId, score, percentage, qualification } = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, {
            score: score,
            percentage: percentage,
            qualification: qualification
        });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.redirect('/thankyou');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/eylpt2', catchAsync(async (req, res) => {
    const { userId, score, percentage, qualification } = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, {
            score: score,
            percentage: percentage,
            qualification: qualification
        });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.redirect('/thankyou');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));




router.get('/thankyou', (req, res) => {
    res.render('./exam/thankyou')
})
module.exports = router