import { createCard } from "./component/createCard.js";

const search = document.querySelector(".selector__submit");

search.addEventListener("click", ()=>{
    
    let inputValue = document.querySelector(".selector__input");

    console.log(inputValue.value);
    inputValue.value = ""

    createCard();
})