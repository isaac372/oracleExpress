const express = require("express");
const app = express();

const personRoutes = require('./routes/person-rotes');
const PORT = process.env.PORT || 4000;

app.use(personRoutes);

app.get("/", (req, res) => {
  res.send("HOLA Mundo");
});

app.listen(PORT, () => {
  console.log(`el servidor esta corriendo en el puerto ${PORT}`);
});
