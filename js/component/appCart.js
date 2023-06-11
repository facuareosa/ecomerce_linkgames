export function shop() {
    let gameShopSection = document.querySelector(".modal__article-container");
  
    let cartItems = localStorage.getItem("cartItems");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
  
    gameShopSection.innerHTML = "";
  
    let modalTotalPrice = [];
    console.log(modalTotalPrice);
  
    let initialTotalPrice = 0; // Variable para almacenar la suma total inicial
  
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
      
        let unitsInput = shopDiv.querySelector(".modal__numbers");
        let unitPrice = parseFloat(product.price.slice(1));
      
        unitsInput.addEventListener("input", (event) => {
          let newUnits = parseInt(event.target.value);
          product.units = newUnits;
      
          modalTotalPrice = cartItems.map((item) => item.units * parseFloat(item.price.slice(1)));
      
          const totalPrice = modalTotalPrice.reduce((anterior, actual) => anterior + actual, 0);
          document.getElementById("totalSpan").textContent = totalPrice;
      
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        });
      
        let initialGamePrice = unitPrice * 1; // Calcula el precio inicial del juego (valor inicial del input = 1)
        initialTotalPrice += initialGamePrice; // Suma el precio inicial al total inicial
      
        if (!product.hasOwnProperty("units")) {
          product.units = 1; // Agrega la propiedad "units" con un valor de 1 si no existe
        }
      });
      
  
    const totalPrice = modalTotalPrice.reduce((anterior, actual) => anterior + actual, initialTotalPrice); // Calcula la suma total considerando el total inicial
    document.getElementById("totalSpan").textContent = totalPrice;
  
    if (modalTotalPrice.length > 0) {
      const totalPrice = modalTotalPrice.reduce((anterior, actual) => anterior + actual, initialTotalPrice);
      document.getElementById("totalSpan").textContent = totalPrice;
    } else {
      document.getElementById("totalSpan").textContent = initialTotalPrice;
    }
  }
  

function removeFromCart(event) {
    if (event.target.classList.contains("modal__trash")) {
        const trashImage = event.target;
        const shopDiv = trashImage.parentNode;
        const title = shopDiv.querySelector(".modal__game").textContent;        
        let cartItems = localStorage.getItem("cartItems");
        cartItems = cartItems ? JSON.parse(cartItems) : [];     
        const updatedCartItems = cartItems.filter((product) => product.title !== title);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    shop();
    }
    if (event.target.classList.contains("modal__btn-erase")) {
    localStorage.removeItem("cartItems");

    shop()
    }
}

document.addEventListener("click", removeFromCart);
