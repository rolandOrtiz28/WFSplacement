const express = require("express");
const router = express.Router();
const User = require('../Model/user');
const catchAsync = require('../utils/catchAsync');

router.get('/examinationeal', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/eal', { user: user })
})
// WASHINGTON FIRST
router.get('/ealwfs1', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/ealwfs1', { user: user })
})
router.get('/ealwfs2', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/ealwfs2', { user: user })
})

// D.C
router.get('/ealdc', async (req, res) => {
    const user = req.session.user; // Adjust this line based on where your user object is stored
    console.log(user)
    res.render('./exam/ealdc', { user: user })
})



router.post('/examinationeal', catchAsync(async (req, res) => {
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

router.post('/ealwfs1', catchAsync(async (req, res) => {
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

router.post('/ealwfs2', catchAsync(async (req, res) => {
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

router.post('/ealdc', catchAsync(async (req, res) => {
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