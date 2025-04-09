const data = JSON.parse(localStorage.getItem("cliente")) || {};

console.log(data == {});
if (data != {}) {
  console.log(data);
  const bienvenida = document.querySelector(".welcome__heading");
  bienvenida.textContent = `¡${
    data.sexo == "Masculino" ? "Bienvenido" : (data.sexo == "Femenino" ? "Bienvenida" : "Bienvenidos") 
  } ${data.sexo ? data.nombre : ""} a My Delights!`;
}
