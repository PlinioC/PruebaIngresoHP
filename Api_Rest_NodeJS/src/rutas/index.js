const { Router } = require('express');
const router = Router()



//Metodos
function GenerarCalculos(numeros){
    var JsonResult = {};
    var Suma = 0 ; 
    var Resta = 0 ;
    var Multiplica = 0 ;
    var Divide = 0 ; 
     var Contador = 0 ;
     numeros.forEach(numero => {
        Suma = Suma + parseInt(numero) ;
       
       
        if (Contador == 0 ){
            Multiplica = 1 * parseInt(numero);
            Divide  = parseInt(numero);
            Resta =  parseInt(numero);
        }
        else {
            Multiplica = parseInt(numero) * Multiplica;
            Divide  = Divide / parseInt(numero);
            Resta = Resta -  parseInt(numero);

        }
        Contador++;
    });
    JsonResult = {
        "Suma": Suma,
        "Resta" :Resta, 
        "Multiplica" :Multiplica,
        "Divide" :Divide
    }; 
return JsonResult; 
}
function Crear_Arreglo(Numbers){
    var numeros  = new Array();
    numeros =Numbers.replace('[','').replace(']', '').split(',');
   //console.log('Numeros a imprimir');
    //console.log(numeros);
    return numeros;
}
function Validar_Arreglo(numeros){
   
    if (Array.isArray(numeros)){
        return true;
    }else {
        return false;
    }

}

function Test_Metodo(req){

    var data = {};
    var errors = "";
    var response = {};
    var numeros  = new Array();
    const { Numbers } = req.body;
        
    numeros = Crear_Arreglo(Numbers);
     
     if (Validar_Arreglo(numeros)){
        data =  GenerarCalculos(numeros)
     
    }else {
     errors = "invalid_data_format";
    
    }
 
    response = {
        "data":data,
        "errors": errors
    }
    
   return response;
}

//Rutas 

router.post('/',(req, res) => {
    res.send('Hola Mundito')
});

router.post('/test',(req, res) => {
    res.json(Test_Metodo(req)); 
});


module.exports = router;