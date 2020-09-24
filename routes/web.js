const homeController = require('../app/http/controllers/homeController')
const {loginController , registerController} = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')


function initRoutes(app) {
    // (req,res)=> {
    //     res.render('home')
    //     // res.send("Hi there from server");
    // }
    app.get("/", homeController().index )
    app.get("/cart", cartController().index )
    app.get("/login", loginController )
    app.get("/register", registerController )

}

module.exports = initRoutes