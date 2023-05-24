export function createCard(gameData){    

    let article = document.createElement("article");

        article.className = "card";

    let cardTemplate =
        `
        <div class="card__img">
            <img class="card__img-background" src=${gameData.img} alt="Graveyard-Keeper">
            <img class="card__img-transition" src=${gameData.imgh} alt="Graveyard-Keeper hover">
        </div>
        <div class="card__body">
            <h2 class="card__body-title">${gameData.title}</h2>
            <h3 class="card__body-genre"><span class="card__body-genre-text">${gameData.genre}</span></h3>
            <span class="card__body-price">€ ${gameData.price}</span>
            <p class="card__body-description">${gameData.description}</p>
        </div>
        <button class="card__btn">añadir</button>
        `;

        article.innerHTML = cardTemplate;

    let cardSection = document.querySelector(".games__container");

        cardSection.appendChild(article);
};
