function loginController(req,res) {
    res.render('auth/login.ejs')
}

function registerController(req,res) {
    res.render('auth/register.ejs')
}

module.exports = {
    loginController,
    registerController
}
