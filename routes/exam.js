const express = require("express");
const router = express.Router();
const User = require('../Model/user')

router.get('/examination', async (req, res) => {
    res.render('./exam/exam')
})


router.post('/examination', async (req, res) => {
    const { score, percentage, qualification } = req.body;
    const userId = req.session.user_id;

    console.log('User ID:', userId);
    console.log('Score:', score);
    console.log('Percentage:', percentage);
    console.log('Qualification:', qualification);

    // Update user document with the score, percentage, and qualification
    await User.findByIdAndUpdate(userId, {
        score: score,
        percentage: percentage,
        qualification: qualification
    });

    // Redirect or send response as needed
    res.redirect('/thankyou');
});


router.get('/thankyou', (req, res) => {
    res.render('./exam/thankyou')
})
module.exports = router