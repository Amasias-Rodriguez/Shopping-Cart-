// fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then()

let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72',
		'X-RapidAPI-Host': 'books39.p.rapidapi.com'
	}
};

// Peticion de productos al servidor
let res = await fetch('https://books39.p.rapidapi.com/CZFA4F/books', options)
let data = await res.json()

// limitados a 4 productos

let productsArray = data.slice(0,4)
console.log(productsArray)

// Imprimir productos en pantalla

productsArray.forEach(product => {
    productContainer.innerHTML += 
    `<div class="shop-item" id="${product.id}">
    <span class="shop-item-title">${product.TITLE}</span>
    <img class="shop-item-image" src="./Images/libro.jpg">
    <p class="shop-item-author">${product.AUTHOR}</p>
    <div class="shop-item-details">
        <span class="shop-item-price">$${product.YEAR}</span>
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
        let actualProduct = productsArray.find(item => item.id == actualID)
        //  let actualProduct = productsArray.find(item => );
        // agregrar el producto al arreglo del carro 


        cartContainer.innerHTML += `
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="./Images/libro.jpg" width="100" height="100">
                        <span class="cart-item-title">${actualProduct.TITLE}</span>
                    </div>
                    <span class="cart-price cart-column">$${actualProduct.YEAR}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`
    });
});

function getTotal(){
    let sumTotal
    cartContainer.reduce( (sum, item)=>{
        sumTotal = sum + item.
    } , 0)
}
