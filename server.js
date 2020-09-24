require('dotenv').config()
const express = require('express')
const app = express();
const ejs = require('ejs')
const path = require('path')
const expressEjsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3000

//Database connection:
const url = 'mongodb+srv://admin:XTiT8KTuwehgbgrV@cluster0.bevii.mongodb.net/realtimepizza?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});

//mongo store
let mongoStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
})

//session use cookies, and cookies needs to be encrypted
app.use(session(
    {
        secret:process.env.COOKIE_SECRET,
        resave: false,
        store: mongoStore,
        saveUninitialized: false,
        cookie: {maxAge: 1000*60*60*24} //24hrs
    }
))

//express-flash-middleware
app.use(flash())

//serving resources on requested routes ASSETS
app.use(express.static('public'))
app.use(express.json())
// to tell express to receive url encoded data for register and login operations
app.use(express.urlencoded({extended:false}))

// set templating engine, explictly telling express to use below configurations
app.use(expressEjsLayouts)
app.set('views', path.join(__dirname,"/resources/views/"))
app.set("view engine",'ejs')



require('./routes/web')(app)

// server listening on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})