const form = document.getElementById("registroForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const url = "http://localhost/test/backend/server.php";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    alert(data.mensaje || data.error);
    
    if (data.mensaje) {
      form.reset();
      window.location.href = "http://127.0.0.1:5501/frontend/index.html";
      form.reset();
    }
  } catch (error) {
    console.log(error);
    alert(error.message || "Error al registrar el cliente.");
  }
});
