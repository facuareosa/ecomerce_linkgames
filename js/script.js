import { JSONfetch } from './component/jsonFetch.js';
import { createCard } from './component/createCard.js';

window.onload = function() {
    JSONfetch()
        .then(data => {
            data.games.forEach(gameData => {
                createCard(gameData);
            });
        });
};

const search = document.querySelector(".selector__submit");

search.addEventListener("click", () => {
    JSONfetch()
        .then(data => {
            const filterInput = document.querySelector(".selector__input");
            const genreSelected = filterInput.value;
            const gamesToDisplay = filterByGenre(data.games, genreSelected);
            renderFilteredGames(gamesToDisplay);
            filterInput.value = ""
        });
});

function filterByGenre(data, genero) {
    if (genero !== "Todos") {
        return data.filter((game) => game.genre === genero);
    }
    return data;
}

function renderFilteredGames(filteredGames) {
    const gameContainer = document.querySelector(".games__container");

    while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.firstChild);
    }

    filteredGames.forEach((game) => {
        createCard(game);
    });
}

// import { JSONfetch } from './component/jsonFetch.js';
// import { createCard } from './component/createCard.js';

// window.onload = function() {
//     JSONfetch()
//         .then(data => {
//             data.games.forEach(gameData => {
//                 createCard(gameData);
//                 gameFilter(gameData)
//             }); 
//         })
// };


// const search = document.querySelector(".selector__submit");

// search.addEventListener("click", ()=>{
//     gameFilter(gameData)
// })


// function gameFilter(gameData){
//     const filterInput = document.querySelector(".selector__input")
//     let genreSelected = filterInput.value

//     filterByGenre(gameData, genreSelected);
// }

// function filterByGenre(data,genero){
//     const gameContainer = document.querySelector(".games__container")
//     let gamesToDisplay = data
    
//     while (gameContainer.firstChild) {
//         gameContainer.removeChild(gameContainer.firstChild);
//     }
    
//     if (genero !== "Todos") {
//         gamesToDisplay = data.filter((game) => game.genre === genero);
//     }
    
//         gamesToDisplay.forEach((juego) => {
//             createCard(juego);
//     })
// }

