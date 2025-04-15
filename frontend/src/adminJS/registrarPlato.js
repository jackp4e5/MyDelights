const form = document.getElementById("registroPlatosForm");

 form.addEventListener("submit", registrarPlato);
 async function  registrarPlato (event)  {
    // Evita que la página se recargue
   const formData = new FormData(form);
   const url = "http://localhost/test/backend/insertPlates.php"
    try {
       const response = await fetch(url, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        alert(data.mensaje || data.error);
    } catch (error) {
        console.log("Error al obtener datos:", error);
        
    }
 }
