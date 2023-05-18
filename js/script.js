import { JSONfetch } from './component/jsonFetch.js';
import { createCard } from './component/createCard.js';

window.onload = function() {
    JSONfetch()
        .then(data => {
            data.games.forEach(gameData => {
                createCard(gameData);
                console.log("hola")
            });
        })
};


// const search = document.querySelector(".selector__submit");

// search.addEventListener("click", ()=>{
//     JSONfetch()
// })


// // function JSONfetch(data){
// //     const filterInput = document.querySelector(".selector__input")
// //     let genreSelected = filterInput.value

// //     fetch("games.json")
// //         .then(res => res.json())
// //         .then(data => {
// //             filterByGenre(data, genreSelected);
// //         })
// //         .then(() => {
// //             filterInput.value = ""
// //         })
// // }

// // function filterByGenre(data,genero){
// //     const gameContainer = document.querySelector(".games__container")
// //     let gamesToDisplay = data.games
    
    
// //     while (gameContainer.firstChild) {
// //         gameContainer.removeChild(gameContainer.firstChild);
// //     }
    
// //     if (genero !== "Todos") {
// //         gamesToDisplay = data.games.filter((game) => game.genre === genero);
// //     }
    
// //     gamesToDisplay.forEach((juego) => {
// //         createCard(juego);
// //     })
// // }

