export function displayMenu(){

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    let navBar      = document.querySelector(".header__nav");
    let menuIcon    = document.querySelector(".header__menu");
    let headerUl    = document.querySelector(".header__ul");
    let header      = document.querySelector(".header") 

    navBar.classList.toggle("header__nav-activo");
    menuIcon.classList.toggle("menu-activo");
    headerUl.classList.toggle("header__ul-activo");
    header.classList.toggle("header-activo")

    if (navBar.classList.contains("header__nav-activo")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

}