const express = require("express");
const mariadb = require("mariadb");

const app = express();
// const pool = mariadb.createPool({
//   host: '127.0.0.1',
//   user: 'gabriel',
//   password: 'magicmike33',
//   database: 'prueba_expotec',
//   connectionLimit: 100
// });

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));