<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root"; // Usuario de MySQL
$password = "password"; // Contraseña de MySQL
$database = "mydelights"; // Nombre de la base de datos


// Habilitar la visualización de errores en PHP
error_reporting(E_ALL);
ini_set('display_errors', 1);

$connection = new mysqli($servername, $username, $password, $database);

// Verificar si la conexión falla
if ($connection->connect_error) {
    echo json_encode(["error" => "Error de conexión: " . $connection->connect_error]);
    exit();
}



if ($_SERVER["REQUEST_METHOD"] === "POST") {

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
    // Limpiar el buffer de salida
    ob_clean();

    $namePlate = $_POST["namePlate"] ?? '';
    $precio = $_POST["precio"] ?? '';
    $url = $_POST["url"] ?? '';
    $categoria = $_POST["categoria"] ?? '';

    if (empty($namePlate) || empty($precio) || empty($url) || empty($categoria)) {
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit();
    }

    // Evitar inyecciones SQL con "prepared statements"
    $sql = "INSERT INTO `platos` (`nombre_plato`, `categoria`, `valor`, `imagen`, `Cantidad`) VALUES (?, ?, ?, ?, 0)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("ssds", $namePlate, $categoria, $precio, $url);

    if ($stmt->execute()) {
        echo json_encode(["mensaje" => "Plato registrado exitosamente"]);
    } else {
        echo json_encode(["error" => "Error al registrar el plato: " . $stmt->error]);
    }

    $stmt->close();
}

$connection->close();
