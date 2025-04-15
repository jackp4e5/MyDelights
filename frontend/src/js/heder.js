const nav = document.querySelectorAll(".dropdown__link");
const navList = document.querySelector(".nav__list");
const cards = document.querySelectorAll(".dropdown__menu");
const card = document.querySelectorAll(".dropdown__menu");
const arrows = document.querySelectorAll(".dropdown__arrow");
const anchors = document.querySelectorAll(".dropdown__anchor");

 nav.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    cards.forEach((card, i) => {
      card.setAttribute("dataset", `card${i}`);
      card.classList.remove("nav__item--active");
      return;
    });
    arrows.forEach((arrow, i) => {
      arrow.classList.remove("nav__item--active");
      return;
    });
    cards[i].classList.toggle("nav__item--active");
    arrows[i].classList.toggle("nav__item--active");

  });
}); 


/* navList.addEventListener("click", (e) => {
  e.preventDefault(); // Previene el comportamiento por defecto del <a>

  console.log(e.target.parentElement.classList.contains("dropdown__link"));

  if (e.target.parentElement.classList.contains("dropdown__link")) {
    e.preventDefault(); // Previene el comportamiento por defecto del <a>
    const currentMenu =
      e.target.parentElement.nextElementSibling.querySelector(
        ".dropdown__menu"
      );
    
    // Cerramos todos los menús
    cards.forEach((card) => {
      card.classList.remove("nav__item--active");
    });
    arrows.forEach((arrow) => {
      arrow.classList.remove("nav__item--active");
    });
    // Alternamos el menú actual
    currentMenu.classList.toggle("nav__item--active");
  }
}); */

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    cards.forEach((card) => {
      card.classList.remove("nav__item--active");
    });
    arrows.forEach((arrow) => {
      arrow.classList.remove("nav__item--active");
    });
  });
});
