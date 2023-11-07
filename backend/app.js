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


//CORS

//RUTAS
app.use('/api', usuario_routes);

//exports

module.exports=app;