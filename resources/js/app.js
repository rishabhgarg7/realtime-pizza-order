import axiso from 'axios'
let addToCartButtons = document.querySelectorAll('.add-to-cart')

const updateCart = (pizza) => {

}

addToCartButtons.forEach((addToCartBtn)=> {
    addToCartBtn.addEventListener('click', (evt)=>{
        let pizza = JSON.parse(addToCartBtn.dataset.pizza)
        console.log({pizza})
        updateCart(pizza)
    })
})