const express = require("express");
const router = express.Router();
const User = require('../Model/user')
const catchAsync = require('../utils/catchAsync');

router.get('/register', async (req, res) => {
    res.render('./user/user')
})


router.post('/register', catchAsync(async (req, res) => {

    const { name, age, gender, program, school } = req.body;
    const user = new User({ name, age, gender, program, school });
    console.log(user);
    await user.save();

    req.session.user = user;
    // Redirect based on the selected program
    if (program === "English Young Learners") {
        res.redirect('/examination');
    } else if (program === "English Adult Learners(Part-Time 1 WFS)") {
        res.redirect('/ealwfs1');
    } else if (program === "English Adult Learners(Part-Time 2 WFS)") {
        res.redirect('/ealwfs2');
    } else if (program === "English Young Learners(Part-Time 1 D.C)") {
        res.redirect('/eylpt1');
    } else if (program === "English Young Learners(Part-Time 2 D.C)") {
        res.redirect('/eylpt2');
    } else if (program === "English Adult Learners(Part-Time 1 D.C)") {
        res.redirect('/ealdc');
    } else if (program === "English Adult Learners(Part-Time 2 D.C)") {
        res.redirect('/ealdc');
    } else {
        // Handle invalid program selection
        res.status(400).send("Invalid program selection");
    }
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.redirect('/placement/admin');

}))







module.exports = router