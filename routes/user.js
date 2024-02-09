const express = require("express");
const router = express.Router();
const User = require('../Model/user')


router.get('/register', async (req, res) => {
    res.render('./user/user')
})


router.post('/register', async (req, res) => {

    const { name, age, gender, program } = req.body;
    const user = new User({ name, age, gender, program });
    console.log(user);
    await user.save();

    req.session.user = user;
    // Redirect based on the selected program
    if (program === "English Young Learners") {
        res.redirect('/examination');
    } else if (program === "English Adult Learners") {
        res.redirect('/examinationeal');
    } else {
        // Handle invalid program selection
        res.status(400).send("Invalid program selection");
    }
});




module.exports = router