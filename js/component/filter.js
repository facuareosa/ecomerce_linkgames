import { JSONfetch } from './jsonFetch.js';
import { createCard } from './createCard.js';

export function filter() {
    JSONfetch()
        .then(data => {
            console.log("hola")
            const filterInput = document.querySelector(".selector__input");
            const genreSelected = filterInput.value;
            const gamesToDisplay = filterByGenre(data.games, genreSelected);
            renderFilteredGames(gamesToDisplay);
            filterInput.value = ""
        });
};



function filterByGenre(data, genero) {
    if (genero !== "Todos") {
        return data.filter((game) => game.genre === genero);
    }
}

function renderFilteredGames(filteredGames) {
    console.log(filteredGames)
    const gameContainer = document.querySelector(".games__container");

    while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.firstChild);
    }

    filteredGames.forEach((game) => {
        createCard(game);
    });
}