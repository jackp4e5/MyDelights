const readDB = async () => {
  const url = "http://localhost/test/backend/server.php";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const readPlatesDB = async () => {
  const url = "http://localhost/test/backend/platesSever.php";

  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(plate => {
      console.log(plate.nombre_plato);
      console.log(plate.valor);
      
    });
  } catch (error) {}
};
readPlatesDB();
readDB();
