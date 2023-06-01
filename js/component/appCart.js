export function shop(img,title,price){
    
    let shopDiv = document.createElement("div");

        shopDiv.className="modal__article";

    let gameShopTemplate=
    `
        <input type="number" class="modal__numbers" id="modal__numbers" name="modal__numbers" value="1" min="1" max="10">
        <img src=${img} alt="" class="modal__img">
        <h2 class="modal__game">${title}</h2>
        <span class="modal__price">€${price}</span>
        <img src="./assets/img/img_ico/trash-filled.svg" class="modal__trash" alt="trashcan">
    `

        shopDiv.innerHTML = gameShopTemplate;
    
    let gameShopSection = document.querySelector(".modal__article-container");

        gameShopSection.appendChild(shopDiv);
}