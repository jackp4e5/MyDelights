export const showMenu = async (plates) => {
  let menu = document.getElementById("menu");

  await plates.forEach((plate, i) => {
    const div = document.createElement("div");
    div.classList.add("menu__item");
    div.innerHTML = `
        
          <img class="images_plates" src="${plate.imagen}" alt="Plato ${
      plate.nombre_plato
    }" />
          <div class="menu__item_grapper">
            <h3>Plato ${i + 1}</h3>
            <p class="menu_dish">${plate.nombre_plato}</p>
            <p class="menu_price">Precio: $<span>${plate.valor}</span></p>
            <input class="button" type="submit" value="Ordenar" />
          </div>   
        
    
    `;

    menu.appendChild(div);
  });
};
document.addEventListener("DOMContentLoaded", showMenu); // Agrega un evento al cargar la página
