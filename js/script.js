import { JSONfetch } from './component/jsonFetch.js';
import { createCard } from './component/createCard.js';
import { filter } from './component/filter.js';


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

// abrir modal

const cart = document.querySelector(".header__li-img");

cart.addEventListener("click", ()=> {
    const modalElement = document.querySelector(".modal");
    
    if (!modalElement.classList.contains("modal-open"))
    modalElement.classList.add("modal-open");
})