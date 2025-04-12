<?php
// MANEJO DE ERRORES
// Habilitar la visualización de errores en PHP
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// HEADERS PARA SOLUCIONAR CORS
// Permitir el acceso desde cualquier origen (esto puede ser ajustado según tus necesidades de seguridad)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root"; // Usuario de MySQL
$password = "password"; // Contraseña de MySQL
$database = "mydelights"; // Nombre de la base de datos

$connection = new mysqli($servername, $username, $password);

if($connection->connect_error){
  die(json_encode(["message" => "Error en la coneccion {$connnection ->connect_error}"]));
}

$connection -> select_db($database);
// Crear la tabla de administradores si no existe

$sql = "CREATE TABLE IF NOT EXISTS administrador(
  Id_administrador INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(45) NOT NULL,
  Apellidos VARCHAR(45) NOT NULL,
  Identificacion BIGINT NOT NULL,
  Correo VARCHAR(100) NOT NULL,
  Contrasena VARCHAR(45) NOT NULL
)";

if($connection-> query($sql)){
  echo json_encode(["message" => "Tabla administrador creada o ya existente."]);
}else{
    echo json_encode(["message" => "Error al crear la tabla: {$connection->error}"]);
}


// Cerrar la conexión
$connection->close();