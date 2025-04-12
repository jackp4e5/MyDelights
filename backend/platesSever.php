<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root"; // Usuario de MySQL
$password = "password"; // Contraseña de MySQL
$database = "mydelights"; // Nombre de la base de datos


$connection = new mysqli($servername, $username, $password, $database);

if ($connection->connect_error) {
    die(json_encode(["mensaje" => "Error de conexión: {$connection->connect_error}"]));
    
}



//Consulta SQL para obtener datos de la tabla 'clientes'

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "CREATE TABLE IF NOT EXISTS platos(
        Id_administrador INt AUTO_INCREMENT PRIMARY KEY,
        Nombre VARCHAR(45) NOT NULL,
        Apellidos VARCHAR(45) NOT NULL,
        Identificacion BIGINT NOT NULL,
        Correo VARCHAR(100) NOT NULL,
        Contrasena VARCHAR(45) NOT NULL
       )";
    // Verificar si la conexión falla
    if ($connection->query($sql)) {
        echo json_encode(["mensaje" => "Tabla 'Platos' creada o ya existente."]);
    } else {
        echo json_encode(["message" => "Error al crear la tabla: {$connection->error}"]);
    }

    $sql = "SELECT * FROM `platos`"; // Seleccionar todos los registros de la tabla "clientes"
    $result = $connection->query($sql);

    $data = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    echo json_encode($data);
}




$connection->close();