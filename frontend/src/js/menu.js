import { platosCarta, platosEjecutivos, platosBebidas } from "./platos.js";

const platosCartaDiv = document.querySelector("#platosCarta");
const platosEjecutivosDiv = document.querySelector("#platosEjecutivos");
const platosBebidasDiv = document.querySelector("#platosBebidas");

platosCarta.forEach((plato) => {
  const { id, nombre, precio, img } = plato;

  const platosCartaHTML = `
    <div class="menu__item">
          <div class="image__grapper">
                <img src=${img} alt="Plato ${nombre}" />
          </div>
          <div class="menu__item_grapper">
                <h3>Plato ${id}</h3>
                <p class="menu_dish">${nombre}</p>
                <p class="menu_price">Precio: <span>$ ${precio}</span></p>
                <input id=${id} class="button" type="submit" value="Ordenar" />
          </div>
    </div>

`;

  platosCartaDiv.innerHTML += platosCartaHTML;
});

platosEjecutivos.forEach((plato) => {
  const { id, nombre, precio, img } = plato;

  const platosCartaHTML = `
    <div class="menu__item">
          <div class="image__grapper">
                <img src=${img} alt="Plato ${nombre}" />
          </div>
          <div class="menu__item_grapper">
                <h3>Plato ${id}</h3>
                <p class="menu_dish">${nombre}</p>
                <p class="menu_price">Precio: <span>$ ${precio}</span></p>
                <input id=${id} class="button" type="submit" value="Ordenar" />
          </div>
    </div>

`;

  platosEjecutivosDiv.innerHTML += platosCartaHTML;
});

platosBebidas.forEach((bebida) => {
  const { id, nombre, precio, img } = bebida;

  const platosCartaHTML = `
    <div class="menu__item">
          <div class="image__grapper">
                <img src=${img} alt="Plato ${nombre}" />
          </div>
          <div class="menu__item_grapper">
                <h3>Plato ${id}</h3>
                <p class="menu_dish">${nombre}</p>
                <p class="menu_price">Precio: <span>$ ${precio}</span></p>
                <input id=${id} class="button" type="submit" value="Ordenar" />
          </div>
    </div>

`;

  platosBebidasDiv.innerHTML += platosCartaHTML;
});
