const nav = document.querySelectorAll(".dropdown__link");
const cards = document.querySelectorAll(".dropdown__menu");
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