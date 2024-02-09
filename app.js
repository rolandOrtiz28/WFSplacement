const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")
const path = require('path')
const app = express()
const flash = require('connect-flash')
const methodOverride = require('method-override')
const session = require('express-session')
const nodemailer = require('nodemailer')
const MongoDBStore = require("connect-mongo");
const ejsMate = require('ejs-mate')
const mongoSanitize = require('express-mongo-sanitize');

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/wfsplacement'

mongoose.connect(dbUrl, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, " connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

const userRoute = require('./routes/user')
const examRoute = require('./routes/exam')
const ealexamRoute = require('./routes/eal')
const adminRoute = require('./routes/admin')


app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));

const secret = process.env.SESSION_SECRET

const sessionConfig = {
    secret,
    name: '_rolandOrtiz',
    resave: false,
    saveUninitialized: true,
    store: MongoDBStore.create({
        mongoUrl: dbUrl,
        touchAfter: 24 * 3600 // time period in seconds
    }),
    cookie: {
        httpOnly: true,
        // secure:true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.set('view engine', 'ejs');  // This line sets EJS as the template engine
app.set('views', path.join(__dirname, 'views'));
app.use(mongoSanitize());


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(mongoSanitize());
app.use(session(sessionConfig))
app.use(flash());

app.use((req, res, next) => {

    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get('/', (req, res) => {
    res.render('home/home')
})


app.use('/', userRoute)
app.use('/', examRoute)
app.use('/', ealexamRoute)
app.use('/placement', adminRoute)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
