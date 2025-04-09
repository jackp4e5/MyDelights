import { platosCarta, platosEjecutivos, platosBebidas } from "./platos.js";
document.addEventListener("DOMContentLoaded", () => {
  const contenedorBtn = document.querySelector("#menu");
  const carritoBtn = document.querySelector(".nav__car");
  const carritoBtnClose = document.querySelector(".carrito__close");
  const contenedorCarrito = document.querySelector(".carrito__items");
  const pagarTotal = document.querySelector(".carrito__total_price--neto");

  // abrir  carrito

  carritoBtn.addEventListener("click", () => {
    const carrito = document.querySelector(".carrito");

    carrito.classList.add("carrito__show");
    document.body.classList.add("no-scroll");
    limpiarCarrito();

    insertarCarritoHtml();

    calcularTotal();
  });

  // cerrar carrito

  carritoBtnClose.addEventListener("click", () => {
    const carrito = document.querySelector(".carrito");
    carrito.classList.remove("carrito__show");
    document.body.classList.remove("no-scroll");
  });

  // limpia el carrito para que no serepitan los productos de ingreso

  const limpiarCarrito = () => {
    contenedorCarrito.innerHTML = "";
  };

  // agregar platos al carrito
  contenedorBtn.addEventListener("click", (e) => {
    if (e.target.closest(".button")) {
      if (e.target.id <= platosCarta.length) {
        agregarCategoria(platosCarta, e);
      } else if (
        e.target.id > platosCarta.length &&
        e.target.id <= platosEjecutivos.length * 2
      ) {
        agregarCategoria(platosEjecutivos, e);
      } else {
        agregarCategoria(platosBebidas, e);
      }
    }
  });

  // agregar platos al carrito
  const agregarCategoria = (categoria, e) => {
    const plato = categoria.find((plato) => plato.id == e.target.id);
    agregarAlCarrito(plato);
  };
  // agregar platos al carrito localstorage
  const agregarAlCarrito = (producto) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    limpiarCarrito();

    if (!carrito.length) {
      const nuevoProducto = producto;
      nuevoProducto.cantidad = 1;
      localStorage.setItem("carrito", JSON.stringify([nuevoProducto]));
      contadorCarrito();
      return;
    } else {
      const existe = carrito.find((plato) => plato.id == producto.id);

      if (existe) {
        existe.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        contadorCarrito();
        return;
      } else {
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        carrito.push(nuevoProducto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        contadorCarrito();
      }
    }
    insertarCarritoHtml();
  };

  // se crea el nodo html para carrito
  const insertarCarritoHtml = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length) {
      carrito.forEach((plato) => {
        const { id, nombre, cantidad, precio, img } = plato;
        const pedido = document.createElement("div");
        pedido.classList.add("carrito__item");
        pedido.innerHTML = `
                  <div class="carrito__item_grapper">
                    <div class="carrito__item_img">
                      <img src=${img} alt="${nombre}" />
                    </div>
                    <div>
                      <h3>Plato ${id}</h3>
                      <p class="carrito_dish">${nombre}</p>
                      <p class="carrito_price">Precio: <span>$ ${precio}</span></p>
                      <p class="carrito_total">Total: <span class="total__span">$ ${
                        precio * cantidad
                      }</span></p>
                    </div>
                  </div>

                  <div class="carrito__item_grapper__buttons">
                    <div id="buttons__cantidad">
                        <p class="cantidad__text">Cantidad:</p>
                        <span class="minus">-</span> <span data-id=${id} class="cantidad__input">${cantidad}</span> <span class="plus">+</span> 
                    </div>
                    <a id=${id} href="#" class="carrito__trash">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                        />
                      </svg>
                    </a>
                  
                  </div>
                
             
          `;

        contenedorCarrito.appendChild(pedido);

        const botones = pedido.querySelector("#buttons__cantidad");
        const totalProducto = pedido.querySelector(".total__span");
        botones.addEventListener("click", (e) => {
          if (e.target.closest(".minus")) {
            if (plato.cantidad > 1) {
              plato.cantidad--;
            }
            const cantidad = document.querySelectorAll(".cantidad__input");
            console.log(cantidad);

            // actualiza la cantidad en el html y el total del producto, tambien en localstorage
            cantidad.forEach((cantidad) => {
              if (cantidad.dataset.id == plato.id) {
                cantidad.textContent = plato.cantidad;
                totalProducto.textContent = `$ ${
                  plato.precio * plato.cantidad
                }`;

                contadorCarrito();
              }
            });
            localStorage.setItem("carrito", JSON.stringify(carrito));
          } else if (e.target.closest(".plus")) {
            plato.cantidad++;
            const cantidad = document.querySelectorAll(".cantidad__input");

            // actualiza la cantidad en el html y el total del producto, tambien en localstorage
            cantidad.forEach((cantidad) => {
              if (cantidad.dataset.id == plato.id) {
                cantidad.textContent = plato.cantidad;

                totalProducto.textContent = `$ ${
                  plato.precio * plato.cantidad
                }`;

                contadorCarrito();
              }
            });
            localStorage.setItem("carrito", JSON.stringify(carrito));
          }
          contadorCarrito();
        });
      });
    } else {
      const contenedorCarritoHTML = `
          <p class="carrito__items__text">
            Aun no hay productos en el carrito
          </p>
        
        
        
        `;
      contenedorCarrito.innerHTML += contenedorCarritoHTML;
    }
  };

  const contadorCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const contador = document.querySelector(".cuenta__carrito");

    if (carrito.length) {
      const cantidadProductos = carrito.reduce((acumulador, tem) => {
        return acumulador + tem.cantidad;
      }, 0);

      contador.textContent = cantidadProductos;
    } else {
      contador.textContent = 0;
    }
  };

  contenedorCarrito.addEventListener("click", (e) => {
    eliminarProducto(e);
    limpiarCarrito();
    insertarCarritoHtml();
    contadorCarrito();
    calcularTotal();
  });

  //  eliminar producto por id

  const eliminarProducto = (e) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (e.target.closest(".carrito__trash")) {
      const productoId = Number(e.target.closest(".carrito__trash").id);
      const productoEliminado = carrito.filter(
        (plato) => plato.id != productoId
      );

      localStorage.setItem("carrito", JSON.stringify(productoEliminado));
    }
  };
  // calculat el total a pagar
  const calcularTotal = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const totalFactura = carrito.reduce((acumulador, tem) => {
      return acumulador + tem.precio * tem.cantidad;
    }, 0);

    pagarTotal.textContent = `$ ${totalFactura}`;
  };

  insertarCarritoHtml();

  contadorCarrito();
});
