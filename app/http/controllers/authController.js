const User = require('../../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport-local')

function loginController(req,res) {
    res.render('auth/login.ejs')
}

function registerController(req,res) {
    res.render('auth/register.ejs')
}

const postRegisterController = async (req,res) => {
    const {name, email, password} = req.body
    //Validating request
    if (!name || !email || !password){
        req.flash('error','All messages are required')
        req.flash('name',name)
        req.flash('email',email)
        return res.redirect('auth/register.ejs')
    }

    //check if email exists or not
    User.exists({email: email}, (err, result)=> {
        if (result){
            //user email already exists in DB
            req.flash('error','User with the same email already exists')
            req.flash('name',name)
            req.flash('email','')
            return res.redirect('auth/register.ejs')
        }
    })

    //hashing the password
    const encryptedPassword = await bcrypt.hash(password,10)

    //Creating a user
    const user = new User({
        name: name,
        email: email,
        password: encryptedPassword
    })

    user.save().then((user)=> {
        //login
        return res.redirect('/')
    }).catch((err)=> {
        console.log("Couldn't register");
        req.flash('error','Something went wrong')
        return res.redirect('/register')
    })

}

const postLoginController = (req,res) => {
    const {email, password} = req.body
    //Validating request
    if (!email || !password){

    }
    console.log(email,password)
}

module.exports = {
    loginController,
    registerController,
    postRegisterController,
    postLoginController
}
