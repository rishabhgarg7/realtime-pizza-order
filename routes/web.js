const homeController = require('../app/http/controllers/homeController')
const {loginController , registerController,postRegisterController, postLoginController} = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')


function initRoutes(app) {
    // (req,res)=> {
    //     res.render('home')
    //     // res.send("Hi there from server");
    // }
    app.get("/", homeController().index )
    app.get("/cart", cartController().index )
    app.post("/update-cart", cartController().update )
    app.get("/login", loginController )
    app.post("/login", postLoginController )
    app.get("/register", registerController )
    app.post('/register', postRegisterController)


}

module.exports = initRoutes