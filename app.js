const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")
const path = require('path')
const app = express()
const flash = require('connect-flash')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoDBStore = require("connect-mongo");
const ejsMate = require('ejs-mate')
const mongoSanitize = require('express-mongo-sanitize');
const ExpressError = require('./utils/ExpressError');
const dbUrl =process.env.DB_URL ||'mongodb://127.0.0.1:27017/wfsplacement'
const Admin = require('./Model/admin');
const helmet = require('helmet')

//  
mongoose.connect(dbUrl, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, " connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

const userRoute = require('./routes/user')
const applicationRoute = require('./routes/application')
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

const frameSrcUrls = [
    "https://js.stripe.com/",
    "https://www.sandbox.paypal.com/",
    "https://www.facebook.com",
]
const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css",
    "https://cdn.ckeditor.com/",
    "https://cdnjs.cloudflare.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://www.google-analytics.com",
    "https://code.jquery.com/",
    "https://fontawesome.com",
    "https://js.stripe.com/v3/",
    "https://www.paypal.com/sdk/js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
    "https://api2.amplitude.com/",
    "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://unpkg.com/i18next/dist/umd/i18next.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",

];
const styleSrcUrls = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css",
    "https://getbootstrap.com/",
    "https://use.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://fontawesome.com",
    "https://api2.amplitude.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
];
const connectSrcUrls = [

    "https://unsplash.com/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css",
    "https://unpkg.com/",
    "https://fontawesome.com",
    "https://ka-f.fontawesome.com/",
    "https://www.sandbox.paypal.com/xoplatform/logger/api/logger",
    "https://api2.amplitude.com/",
];
const fontSrcUrls = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css",
    "https://fonts.gstatic.com/",
    "https://cdnjs.cloudflare.com/",
    "https://use.fontawesome.com/",
    "https://fontawesome.com",
    "https://ka-f.fontawesome.com/",
    "https://api2.amplitude.com/",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/fonts/bootstrap-icons.woff",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/fonts/bootstrap-icons.woff2",


];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            formAction: ["'self'"],
            frameSrc: ["'self'", "'unsafe-inline'", ...frameSrcUrls],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            mediaSrc: ["'self'"],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`,
                "https://images.unsplash.com/",
                "https://i.pinimg.com/564x/6c/bf/00/6cbf00a772725add422adf6bb976f6ba.jpg",
                "https://media.istockphoto.com/",
                "https://img.icons8.com/ios-glyphs/256/phone-disconnected.png",
                "https://source.unsplash.com/collection/10623559",
                "https://source.unsplash.com/collection/8657917",
                "https://www.paypalobjects.com/js-sdk-logos/2.2.7/paypal-blue.svg",
                "https://www.paypalobjects.com/js-sdk-logos/2.2.7/card-black.svg",
                "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
                "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/images/ui-icons_444444_256x240.png",



            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);

app.use((req, res, next) => {
    res.setHeader('Set-Cookie', 'HttpOnly; Secure; SameSite=None');
    next();
});



app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(mongoSanitize());
app.use(session(sessionConfig))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
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
app.use('/', applicationRoute)
app.use('/', examRoute)
app.use('/', ealexamRoute)
app.use('/placement', adminRoute)


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something went wrong!';
    res.status(statusCode).render('error', { err });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
