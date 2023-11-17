//Crear un servidor con nodejs y express
'use strict'
var express= require('express');
var bodyParser= require('body-parser');

var app= express();

//Cargar archivos de rutas

var usuario_routes=require('./routes/usuario');


//Middelwares: capa que se ejecuta antes de ejecutar la acción de un controlador

app.use(bodyParser.urlencoded({extended:false}));
//Transforma la información de una peti post a un json
app.use(bodyParser.json());


// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

//RUTAS
app.use('/api', usuario_routes);

//exports

module.exports=app;