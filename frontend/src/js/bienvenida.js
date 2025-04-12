const cliente = JSON.parse(localStorage.getItem("cliente")) || {};

if (cliente != {}) {
  const bienvenida = document.querySelector(".welcome__heading");
  bienvenida.textContent = `¡${
    cliente.sexo == "Masculino"
      ? "Bienvenido"
      : cliente.sexo == "Femenino"
      ? "Bienvenida"
      : "Bienvenidos"
  } ${cliente.sexo ? cliente.nombre : ""} a My Delights!`;
}
