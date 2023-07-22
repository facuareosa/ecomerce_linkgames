import { JSONfetch } from './component/jsonFetch.js';
import { createCard } from './component/createCard.js';
import { filter } from './component/filter.js';
import { shop } from './component/appCart.js';
import { displayMenu } from './component/menu.js';

//llamada al JSON y creacion de tarjetas con todos los datos
window.onload = function() {
    JSONfetch()
        .then(data => {
            data.games.forEach(gameData => {
                createCard(gameData);
            });
        });
};

// llamada al filtro
const search = document.querySelector(".selector__submit");
search.addEventListener("click", filter)

// abrir modal-cerrar modal

const cart = document.querySelector(".header__li-img");
const modalElement = document.querySelector(".modal");

cart.addEventListener("click", ()=> {
    modalElement.classList.add("modal-open");
    shop();
})

document.addEventListener("click", (event) => {
    if (event.target.matches(".modal, .modal__close")) {
    modalElement.classList.remove("modal-open");
    }
});

// Display menu hamburguesa

const menuBtn = document.querySelector(".header__menu");

menuBtn.addEventListener("click", displayMenu);