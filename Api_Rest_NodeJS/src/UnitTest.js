const assert = require('chai').assert;
const app = require('./rutas/index');

describe('App', function(){
 it ('La aplicacion debe retornar error 442', function (){
     var NumberEntrada = [1,2,3];
     assert.equal(app.Crear_Arreglo(NumberEntrada),NumberEntrada);
 });

});