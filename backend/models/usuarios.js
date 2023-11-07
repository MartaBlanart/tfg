'use strict'

var mongoose= require('mongoose');

var schema= mongoose.Schema;

var usuariosSchema=schema({
    name:String,
    surname:String,
    email: String,
    pass:String
    
})

module.exports=mongoose.model('Usuario', usuariosSchema);