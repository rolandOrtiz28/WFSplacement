const express = require("express");
const router = express.Router();
const Application = require('../Model/application')
const catchAsync = require('../utils/catchAsync');

router.get('/application', async (req, res) => {
    res.render('./user/application')
})


router.post('/application', catchAsync(async (req, res) => {

    const { name, age, gender, position} = req.body;
    const application = new Application({ name, age, gender, position});
    console.log(application);
    await application.save();

    req.session.application = application;
    // Redirect based on the selected program
    res.redirect('/applicationexam')
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Application.findByIdAndDelete(id);
    res.redirect('/placement/admin');

}))







module.exports = router