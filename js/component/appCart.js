export function shop() {
    let gameShopSection = document.querySelector(".modal__article-container");
  
    let cartItems = localStorage.getItem("cartItems");
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    gameShopSection.innerHTML = "";

    let modalTotalPrice = [];
    console.log(modalTotalPrice)
    cartItems.forEach((product) => {
    let shopDiv = document.createElement("div");
    shopDiv.className = "modal__article";

    let { img, title, price } = product;

    let gameShopTemplate = `
        <input type="number" class="modal__numbers" id="modal__numbers" name="modal__numbers" value="1" min="1" max="10">
        <img src=${img} alt="" class="modal__img">
        <h2 class="modal__game">${title}</h2>
        <span class="modal__price">${price}</span>
        <img src="./assets/img/img_ico/trash-filled.svg" class="modal__trash" alt="trashcan">
    `;

    shopDiv.innerHTML = gameShopTemplate;

    gameShopSection.appendChild(shopDiv);

    //BUSCAR TOMAR VALUE DEL INPUT DEL JUEGO PARA MULTIPLICARLO POR UNITPRICE Y ACTUALIZAR EL SPAN O PROBAR AGREGANDO AL ARRAY LA CANTIDAD DE VECES QUE DIGA EL INPUT.
    let unitsNumber = shopDiv.querySelector(".modal__numbers").value;
    let unitPrice = parseFloat(product.price.slice(1));
    let individualGamePrice = (unitPrice) * unitsNumber;
    
        modalTotalPrice.push(individualGamePrice);
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    if (modalTotalPrice.length > 0) {
        const suma = modalTotalPrice.reduce((anterior, actual) => anterior + actual, 0);
        document.getElementById("totalSpan").textContent = suma;
    } else {
        document.getElementById("totalSpan").textContent = 0;
    }
}


function removeFromCart(event) {
    if (event.target.classList.contains('modal__trash')) {
    const trashImage = event.target;
    const shopDiv = trashImage.parentNode;
    const title = shopDiv.querySelector('.modal__game').textContent;

    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    const updatedCartItems = cartItems.filter((product) => product.title !== title);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    shop();
    }
}

document.addEventListener('click', removeFromCart);