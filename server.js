require('dotenv').config()
const express = require('express')
const app = express();
const ejs = require('ejs')
const path = require('path')
const expressEjsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const PORT = process.env.PORT || 3000
//Database connection:


//session use cookies, and cookies needs to be encrypted
app.use(session(
    {
        secret:process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 1000*60*60*24} //24hrs
    }
))

//express-flash-middleware
app.use(flash())

//serving resources on requested routes ASSETS
app.use(express.static('public'))

// set templating engine, explictly telling express to use below configurations
app.use(expressEjsLayouts)
app.set('views', path.join(__dirname,"/resources/views/"))
app.set("view engine",'ejs')



require('./routes/web')(app)

// server listening on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})