const express = require("express");
const router = express.Router();
const User = require('../Model/user')


router.get('/register', async (req, res) => {
    res.render('./user/user')
})


router.post('/register', async (req, res) => {
    await User.deleteMany({})
    const { name, age, gender } = req.body;
    const user = new User({ name, age, gender })
    console.log(user)
    user.save()
    req.session.user_id = user._id;
    res.redirect('/examination')
})



module.exports = router