const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World Prog 3')
  })

  app.get('/saludar', function (req, res) {
      let name = req.query.name;
    res.send(`Hola  ${name}`);
  })

  app.listen(3000, "localhost", function(){
      console.log("Servidor iniciado en el puerto 3000");
  })