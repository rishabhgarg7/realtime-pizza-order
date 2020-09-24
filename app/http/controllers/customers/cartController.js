function cartController() {
    return {
        index(req,res){
            res.render('customers/cart.ejs')
        },
        update(req,res){
            res.json({data:"All ok!"})
        }
    }
}

module.exports = cartController;