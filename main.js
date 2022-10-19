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

let productsArray = data.slice(1,5)
console.log(productsArray)

// Imprimir productos en pantalla

productsArray.forEach(product => {
    productContainer.innerHTML += 
    `<div class="shop-item">
    <span class="shop-item-title">${product.title}</span>
    <img class="shop-item-image" src="${product.images[0]}">
    <div class="shop-item-details">
        <span class="shop-item-price">${product.price}</span>
        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
    </div>
    </div>`
});

let addBtns = document.querySelectorAll('.shop-item-button');
addBtns = [...addBtns];

addBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        console.log('click')
    });
});