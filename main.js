// fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then()

let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');
// let addBtns = document.querySelectorAll('.shop-item-button');

// Peticion de productos al servidor
let res = await fetch('https://api.escuelajs.co/api/v1/products')
let data = await res.json()

// limitados a 4 productos

let productsArray = data.slice(0,4)
console.log(productsArray)

// Imprimir productos en pantalla

productsArray.forEach(product => {
    productContainer.innerHTML += 
    `<div class="shop-item" id="${product.id}">
    <span class="shop-item-title">${product.title}</span>
    <img class="shop-item-image" src="${product.images[0]}">
    <div class="shop-item-details">
        <span class="shop-item-price">$${product.price}</span>
        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
    </div>
    </div>`
});

let addBtns = document.querySelectorAll('.shop-item-button');
addBtns = [...addBtns];

let cartContainer = document.querySelector('.cart-items');

addBtns.forEach(btn=>{
    btn.addEventListener('click', event=>{
        console.log('click')
        // Agregando productos al carro

        // Buscar el ID del producto 
        let actualID = parseInt(event.target.parentNode.parentNode.id);
        console.log(actualID);

        // con el Id encontrar objeto actual 
        let actualProduct = productsArray.find(item =>)
        // agregrar el producto al arreglo del carro 


        cartContainer.innerHTML += `
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="./Images/shirt.jpg" width="100" height="100">
                        <span class="cart-item-title">Shirt</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`
    });
});
