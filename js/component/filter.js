import { JSONfetch } from './jsonFetch.js';
import { createCard } from './createCard.js';

export function filter() {
    JSONfetch()
        .then(data => {
            const filterInput = document.querySelector(".selector__input");
            const genreSelected = filterInput.value;
            const gamesToDisplay = filterByGenre(data.games, genreSelected);
            renderFilteredGames(gamesToDisplay);
            filterInput.value = ""
        });
};

function filterByGenre(data, genero) {
    return genero !== "Todos" && genero !== "" ? data.filter((game) => game.genre === genero) : data;
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