<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost"; // Cambia esto si es necesario
$username = "root"; // Usuario de MySQL
$password = "password"; // Contraseña de MySQL
$database = "mydelights"; // Nombre de la base de datos

$connection = new mysqli($servername, $username, $password);

if ($connection->connect_error) {
    die(json_encode(["mensaje" => "Error de conexión: {$connection->connect_error}"]));
}

$sql = "CREATE DATABASE IF NOT EXISTS $database";
if ($connection->query($sql)) {
    echo "Base de datos creada" . $database;
} else {
    echo "Error al crear la base de datos: " . $connection->error;
}

$connection->select_db($database);




if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["name"];
    $IDnumber = $_POST["IDnumber"];
    $date = $_POST["date"];
    $address = $_POST["address"];
    $phone = $_POST["phone"];
    $mail = $_POST["mail"];
    $password = $_POST["password"];
    $sexo = $_POST["sexo"];



    if (empty($nombre) || empty($IDnumber) || empty($date) || empty($address) || empty($phone) || empty($mail) || empty($password) || empty($sexo)) {
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit();
    }

    $sql = "INSERT INTO `clientes` (`Id_cliente`, `Nombre`, `Documento`, `FechaNacimiento`, `Direccion`, `Telefono`, `Correo`,`Contraseña`,`Sexo`) VALUES (NULL,'$nombre', '$IDnumber', '$date', '$address', '$phone', '$mail','$password', '$sexo')";


    if ($connection->query($sql) === TRUE) {
        echo json_encode(["mensaje" => "Usuario registrado exitosamente"]);
    } else {
        echo json_encode(["error" => "Error al registrar usuario: {$connection->error} "]);
    }
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "CREATE TABLE IF NOT EXISTS clientes (
        Id_cliente INT AUTO_INCREMENT PRIMARY KEY,
        Nombre VARCHAR(100) NOT NULL,
        Documento BIGINT NOT NULL,
        FechaNacimiento DATE NOT NULL,
        Direccion VARCHAR(255) NOT NULL,
        Telefono BIGINT NOT NULL,
        Correo VARCHAR(100) NOT NULL,
        Contrasena VARCHAR(25) NOT NULL,
        Sexo ENUM('Masculino', 'Femenino','Otro') NOT NULL
    )";

    if ($connection->query($sql)) {
        echo json_encode(["mensaje" => "Tabla 'cliente' creada o ya existente."]);
    } else {
        echo json_encode(["message" => "Error al crear la tabla: {$connection->error}"]);
    }
    $sql = "SELECT * FROM `clientes`"; // Seleccionar todos los registros de la tabla "clientes"
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
