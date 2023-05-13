export function createCard(){    

    let article = document.createElement("article");

        article.className = "card";

    let cardTemplate =
        `
        <div class="card__img">
            <img class="card__img-background" src="./assets/img/img_game/Graveyard_keeper.jpg" alt="Graveyard-Keeper">
            <img class="card__img-transition" src="./assets/img/img_hover/Graveyard_keeper_h.png" alt="Graveyard-Keeper hover">
        </div>
        <div class="card__body">
            <h2 class="card__body-title">Graveyard keeper</h2>
            <h3 class="card__body-gender"><span class="card__body-gender-text">Supervivencia</span></h3>
            <span class="card__body-price">$200</span>
            <p class="card__body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe mollitia lorem</p>
        </div>
        <button class="card__btn">añadir</button>
        `;

        article.innerHTML = cardTemplate;

    let cardSection = document.querySelector(".games__container");

        cardSection.appendChild(article);
};
