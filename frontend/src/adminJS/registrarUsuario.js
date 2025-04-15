const submit = document.getElementById("registroForm"); // Selecciona el formulario

submit.addEventListener("submit", registrarUsuario); // Agrega un evento al formulario

function registrarUsuario(event) {
  event.preventDefault(); // Evita que la página se recargue

  const sexo = document.getElementById("sexo").value;

  if (!sexo) {
    alert("Por favor, selecciona un sexo.");
    return;
  }

  // Continúa con el envío del formulario
  const formData = new FormData(submit);

  fetch("http://localhost/test/backend/server.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.mensaje || data.error);
    })
    .catch((error) => console.error("Error:", error));

  
}


console.log("desde eventos");
