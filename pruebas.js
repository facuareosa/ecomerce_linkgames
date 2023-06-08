// export function shop() {
//   let gameShopSection = document.querySelector(".modal__article-container");
//   gameShopSection.innerHTML = ""; // Limpiar el contenido existente del contenedor

//   let gamesInCart = JSON.parse(localStorage.getItem("gamesInCart")) || [];

//   gamesInCart.forEach(gameData => {
//     let shopDiv = document.createElement("div");
//     shopDiv.className = "modal__article";

//     let gameShopTemplate = `
//       <input type="number" class="modal__numbers" id="modal__numbers" name="modal__numbers" value="1" min="1" max="10">
//       <img src="${gameData.img}" alt="" class="modal__img">
//       <h2 class="modal__game">${gameData.title}</h2>
//       <span class="modal__price">€ ${gameData.price}</span>
//       <img src="./assets/img/img_ico/trash-filled.svg" class="modal__trash" alt="trashcan">
//     `;

//     shopDiv.innerHTML = gameShopTemplate;
//     gameShopSection.appendChild(shopDiv);
//   });
// }