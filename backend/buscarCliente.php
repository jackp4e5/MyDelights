<?php
// MANEJO DE ERRORES
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// HEADERS PARA SOLUCIONAR CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// CONEXIÓN A LA BASE DE DATOS
$servername = "localhost";
$username = "root"; // Usuario de MySQL
$password = "password"; // Contraseña de MySQL
$database = "mydelights"; // Nombre de la base de datos


$connection = new mysqli($servername, $username, $password, $database);

if ($connection->connect_error) {
    die(json_encode(["mensaje" => "Error de conexión: {$connection->connect_error}"]));
}

// CONSULTA A LA BASE DE DATOS
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET['emailSearch'])) {
    $emailSearch = trim(strtolower($connection->real_escape_string($_GET['emailSearch'])));

    if (empty($emailSearch)) {
        echo json_encode(["error" => "El correo no puede estar vacío"]);
        exit;
    }

    // CONSULTA SQL FILTRADA POR EMAIL EXACTO
    $sql = "SELECT * FROM `clientes` WHERE LOWER(TRIM(`Correo`)) = '$emailSearch' LIMIT 1";
    $sql1 = "SELECT * FROM `clientes` WHERE LOWER(TRIM(`Correo`)) = '$emailSearch'";
    $result = $connection->query($sql);

    $data = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        $data = ["mensaje" => "No se encontró ningún usuario con ese correo"];
    }

    echo json_encode($data);
}

// Cerrar la conexión
$connection->close();
?>