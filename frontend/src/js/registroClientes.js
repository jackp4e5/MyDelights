

const form = document.getElementById("registroForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const url = "http://localhost/test/backend/server.php";
  console.log("Registrando cliente...");
  
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    alert(data.mensaje || data.error);
    if (data.mensaje) {
      form.reset();
      window.location.href = "http://127.0.0.1:5501/index.html";
    }
  } catch (error) {
    console.log(error);
  }
});
