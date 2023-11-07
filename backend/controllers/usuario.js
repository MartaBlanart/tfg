'use strict'

//Hay que importar el modelo de datos
var User= require('../models/usuarios')

var controller={

    home:function(req,res){
        return res.status(200).send({
            message:"Hola"
        })
        
    },

    test:function(req,res){
        return res.status(200).send({
            message:"Adiós"
        })

    },
     
    //Método create de una consulta CRUD
    saveUser:function(req,res){
      var user=new User();
      var params = req.body;
      user.name= params.name;
      user.surname=params.surname;
      user.email=params.email;
      user.pass=params.pass;

    
        
        user.save()
        .then(userStored => {
        return res.status(200).send({ user: userStored });
        })
        .catch(err => {
        return res.status(500).send({ message: 'Error al guardar el documento.' });
        });
},

//Método getOne de una consulta CRUD
getUser:function(req,res)
{
 var userId=req.params.id;


 User.findById(userId) // Pasar la ID como argumento a findById
 .then(userStored => {
     if (!userStored) {
         return res.status(404).send({ message: 'Usuario no encontrado.' });
     }
     return res.status(200).send({ user: userStored });
 })
 .catch(err => {
     console.error(err); // Loguea el error para propósitos de depuración
     return res.status(500).send({ message: 'Error al buscar el usuario.' });
 });
 
},

//Método getAll de una consulta CRUD
getAll: async function (req, res) {
    try {

    //En los parentesis del .find({AQUI SE PODRÍAN PONER CONDICIONES})
    //El .sort() ordenar y en los parentesis es donde se mete la condicion

      const users 
      = await User.find({ }).sort('year');
      return res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al buscar los usuarios.' });
    }
  },
  //Método update de una consulta CRUD
  updateUser: function(req, res) {
    var userId = req.params.id;
    var update = req.body;
  
    User.findByIdAndUpdate(userId, update)
      .then(userUpdate => {
        if (!userUpdate) {
          return res.status(404).send({ message: 'No se ha podido actualizar el usuario.' });
        }
        return res.status(200).send({
          user: userUpdate
        });
      })
      .catch(err => {
        return res.status(500).send({ message: 'Error al actualizar.' });
      });
  },
   
 //Método delete de una consulta CRUD

deleteUser: function(req, res) {
    var userId = req.params.id;
  
    User.findByIdAndDelete(userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: 'Usuario no encontrado.' });
        }
        return res.status(200).send({ message: 'Usuario eliminado correctamente.' });
      })
      .catch(err => {
        return res.status(500).send({ message: 'Error al eliminar el usuario.' });
      });
  },

  //Metodo que nos permite subir archivos a nuestra web

  uploadImages:function(req,res){
    var userId=req.params.id;
    var fileName= 'Imagen no subida...';

     
  }
}

//Si yo importo este controller en otra parte del proyecto con un required debería de funcionar 
module.exports=controller;