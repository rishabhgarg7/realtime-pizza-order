const express = require('express')
const app = express();
const ejs = require('ejs')
const path = require('path')
const expressEjsLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000

//serving resources on requested routes ASSETS
app.use(express.static('public'))
app.get("/", (req,res)=> {
    res.render('home')
    // res.send("Hi there from server");
})

// set templating engine, explictly telling express to use below configurations
app.use(expressEjsLayouts)
app.set('views', path.join(__dirname,"/resources/views/"))
app.set("view engine",'ejs')

// server listening on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})