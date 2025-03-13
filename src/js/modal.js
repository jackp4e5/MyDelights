const modal = document.querySelector(".modal");
const reservaButton = document.querySelector(".reserva__bottom");
const closeButton = document.querySelector(".modal__close");

reservaButton.addEventListener("click", () => {
  console.log("click in button");
  modal.classList.toggle("modal__show");
  document.body.style.height = "100vh";
  
});
closeButton.addEventListener("click", () => {
  console.log("click in button");
  modal.classList.toggle("modal__show");
  
});
