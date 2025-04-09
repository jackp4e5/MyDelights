document.addEventListener("DOMContentLoaded", () => {
  const contenedorBtn = document.querySelectorAll(".button");
  const contenedorToast = document.querySelector("#container__toast");

  contenedorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      agregarToast({
        tipo: "success",
        titulo: "Exito",
        mensaje: `El plato ${e.target.id} se ha agregado al carrito`,
      });
    });
  });

  contenedorToast.addEventListener("click", (e) => {
    if (e.target.closest(".btn__close")) {
      const id = e.target.closest(".toast").id;

      cerrarToastID(id);
    }
  });

  const cerrarToastID = (id) => {
    const toast = document.getElementById(id);
    toast.classList.add("close__toast");
    setTimeout(() => {
      toast.remove();
    }, 500);
  };

  const agregarToast = ({ tipo, titulo, mensaje }) => {
    const newToast = document.createElement("div");

    newToast.classList.add("toast");
    newToast.classList.add("auto__close");
    newToast.classList.add(tipo);
    const numeroAlAzar = Math.floor(Math.random() * 100);
    const date = Date.now();
    const dataSetId = numeroAlAzar + date;
    newToast.id = dataSetId;

    const icons = {
      success: `  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zm10.03 4.97a.75.75 0 01.011 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 011.08-.022z"
                />
              </svg>`,
      error: `<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.46.146A.5.5 0 0011.107 0H4.893a.5.5 0 00-.353.146L.146 4.54A.5.5 0 000 4.893v6.214a.5.5 0 00.146.353l4.394 4.394a.5.5 0 00.353.146h6.214a.5.5 0 00.353-.146l4.394-4.394a.5.5 0 00.146-.353V4.893a.5.5 0 00-.146-.353zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995A.905.905 0 018 4m.002 6a1 1 0 110 2 1 1 0 010-2"
                />
              </svg>`,
      warning: ` <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                />
              </svg>`,
    };

    const toastHTML = `
           <div class="content">
            <div class="icon">
              ${icons[tipo]}
            </div>
            <div class="text">
              <h3 class="title">¡${titulo}!</h3>
              <p class="description">${mensaje}.</p>
            </div>
          </div>
          <button class="btn__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
              />
            </svg>
          </button>
  
  `;

    newToast.innerHTML = toastHTML;

    contenedorToast.appendChild(newToast);

    setTimeout(() => {
      newToast.remove();
    }, 5000);
  };
});


