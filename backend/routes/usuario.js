'use strict'

var express= require('express');
var UsuarioController= require('../controllers/usuario');
var router= express.Router();

//Rutas
router.get('/home', UsuarioController.home);
router.post('/save-user', UsuarioController.saveUser);
router.get('/getUser/id:?', UsuarioController.getUser );
router.get('/getAll', UsuarioController.getAll );
router.put('/updateUser/:id', UsuarioController. updateUser);
router.delete('/deleteUser/:id', UsuarioController. deleteUser);


module.exports=router;

