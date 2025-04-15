import { showMenu } from "./showMenu.js";
import { showUsers } from "./showUsers.js";

const readDBmySQL = async () => {
  const url = "http://localhost/test/backend/server.php";
  try {
    const response = await fetch(url);
    const data = await response.json();
    showUsers(data);
  } catch (error) {
    console.log("Error al obtener datos:", error);
  }
};

const readDBmySQLPlates = async () => {
  const url = "http://localhost/test/backend/platesSever.php";
  try {
    const response = await fetch(url);
    const text = await response.text();

    const data = await JSON.parse(text);

    const dataArray = Array.isArray(data) ? data : Object.values(data);

    
    showMenu([...dataArray]);
  } catch (error) {
    console.log("Error al obtener datos:", error);
  }
};

readDBmySQLPlates();
readDBmySQL();
