const modal = document.querySelector(".modal");
const reservaButton = document.querySelector(".reserva__bottom");
const closeButton = document.querySelector(".modal__close");

reservaButton.addEventListener("click", () => {
  modal.classList.toggle("modal__show");
  document.body.style.height = "100vh";
});
closeButton.addEventListener("click", () => {
  modal.classList.toggle("modal__show");
});
