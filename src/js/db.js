/* conexion */

import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  database: "clientes_mydelights",
  user: "root",
  password: "",
});

connection.connect(function (err) {
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
  } else {
    console.log("Conexión exitosa");
  }
});

export const newClient = (data) => {
  const insertar_cliente =
    "INSERT INTO `clientes` (`Id`,`Nombre`, `Documento`, `FechaNacimiento`, `Direccion`, `Telefono`, `Correo`, `Sexo`) VALUES (NULL,'Sansra pachón Escobar', '10038123947', '1996-11-01', 'calle 64c # 110d -30', '3144115161', 'jack.k@gmail.com', 'Femenino');";

  connection.query(insertar_cliente, function (err, list) {
    if (err) {
      console.log(err.code);
      console.log(err.fatal);
    } else {
      console.log(list);
    }
  });
};

const clientes = "SELECT * FROM clientes";

connection.query(clientes, function (err, list) {
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
  } else {
    console.log(list);
  }
});

connection.end();
