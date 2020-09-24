const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req,res){

            const pizzas = await Menu.find()
            return res.render('home.ejs', {'pizzas': pizzas})

            // Menu.find().then(pizzas=> {
            // res.render('home.ejs', {'pizzas': pizzas})
            // }).catch(()=>{
            //     console.log("Couldn't fetch data")
            // })
        }
    }
}


module.exports = homeController;