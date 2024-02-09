const express = require("express");
const router = express.Router()
const User = require('../Model/user');



router.get('/admin', async (req, res) => {
    const users = await User.find()
    res.render('./admin/admin', { users })
})







module.exports = router