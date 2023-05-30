const express = require('express')
const app = express()
const port = 3000
const path=require("path");
const images=path.join(__dirname,"images");
app.use(express.static(images));

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/paginaLibros.html')
})


app.get('/carrusel', (req, res) => {
  res.sendFile(__dirname + '/carrusel.html')
})


app.post('/insertar', (req, res) => {
  console.log(req)
  var mysql = require('mysql');
  var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'formularioLibros',
    user : 'alumno',
    password : 'alumnoipm',
});
  conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
  });

  const{email,contrasenia}= req.body;
  const sql = 'insert into mensaje values(NULL,"'+ email+'","'+contrasenia+'")';
  const values=[email,contrasenia];

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





