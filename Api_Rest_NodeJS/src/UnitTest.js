const assert = require('chai').assert;
const app = require('./rutas/index');

describe('App', function(){
 it ('La aplicacion debe retornar exitoso y devolver el jsoncompleto', function (){
    
     assert.equal(app.Test_Metodo(NumberEntrada),);
    });
 });

 describe('App', function(){
    it ('La aplicacion debe retornar el arreglo en arry ', function (){
        var NumberEntrada = "123";
        assert.equal(app.Crear_Arreglo(NumberEntrada),NumberEntrada);
    });
});