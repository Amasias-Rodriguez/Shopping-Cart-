
let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');
let totalElement = document.querySelector('.cart-total-title');


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
        if(actualProduct.quantity === undefined){
            actualProduct.quantity = 1;
        }
      
        //  preguntar si el product que estoy agregando ya existe );

        let existe = false
        shoppingCartArray.forEach(libro => {
            if (actualID == libro.id){
                existe = true
            }else{
            }
        })


        if(existe){
            console.log('aumentado')
            actualProduct.quantity++
        }else{
            shoppingCartArray.push(actualProduct)
        }


        console.log(shoppingCartArray)
        // dibujar en el dom el arreglo de compras actualizado
        drawItems()
         // actualizar el valor total
         getTotal()

         updateNumbersOfItems()

         removeItems()

    });
});     

         function getTotal(){
            let sumTotal
            let total = shoppingCartArray.reduce( (sum, item)=>{
                sumTotal = sum +item.quantity*item.YEAR
                return sumTotal
            } , 0);
            totalElement.innerText = `$${total}`      
        }
    
        function drawItems(){
            cartContainer.innerHTML = '';
            shoppingCartArray.forEach(item => {
            cartContainer.innerHTML += 
                `<div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="./Images/libro.jpg" width="100" height="100">
                        <span class="cart-item-title">${item.TITLE}</span>
                    </div>
                    <span class="cart-price cart-column">$${item.YEAR}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="${item.quantity}">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`
            });
            removeItems()
        }

        function updateNumbersOfItems(){
            let inputNumber = document.querySelectorAll('.cart-quantuty-input');
            inputNumber = {...inputNumber}
            inputNumber.forEach(item => {
                item.addEventListener('click', event=>{
                    // conseguir titulo del libro
                    let actualBookTitle = event.target.parentElement.parentElement.childNodes [1].innerText
                    let actualBookQuantity = parseInt(event.target.value);
                    // busco el objeto con ese titulo
                    let actualBookObject = shoppingCartArray.find(item => item.TITLE == actualBookTitle)
                    // actualizar el numero de la propiedad quantity
                    actualBookObject.quantity = actualBookQuantity;
                    // actualizar el precio total

                    getTotal()
                });
            });
        }

      function removeItems(){
        let removeBtns = documents.querySelectorAll('.btn-danger');
        removeBtns = [...removeBtns];
        removeBtns.forEach(btn => {
            btn.addEventListener('click', event=>{
                // conseguir titulo del libro
                let actualBookTitle = event.target.parentElement.parentElement.childNodes [1].innerText
                // busco el objeto con ese titulo
                let actualBookObject = shoppingCartArray.find(item => item.TITLE == actualBookTitle)
                // remover el arreglo de productos de cart
                shoppingCartArray = shoppingCartArray.filter(item => item != actualBookObject)
                // actualizar el precio total
                drawItems()
                getTotal()
                updateNumberOfItems()
            });
        });
      }
               
   


