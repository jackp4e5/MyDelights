export const showUsers = (data) => {
  let tabla = document.getElementById("tablaUsuarios");
  tabla.innerHTML = ""; // Limpiar antes de agregar datos

  data.forEach((user) => {
    let fila = `
            <tr>
                <td>${user.Id_cliente}</td>
                <td>${user.Nombre}</td>
                <td>${user.Documento}</td>
                <td>${user.FechaNacimiento}</td>
                <td>${user.Direccion}</td>
                <td>${user.Telefono}</td>
                <td>${user.Correo}</td>
                <td>${user.Sexo}</td>
                
            </tr>
        `;
    tabla.innerHTML += fila;
  });
};
