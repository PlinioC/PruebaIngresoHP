const express = require('express');
const morgan  = require('morgan');


const app = express();

//Configuraciones
app.set('puerto',process.env.PORT || 3000);
app.set('json spaces', 2 ); 

//Herramientas 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutas 
app.use(require('./rutas/index.js'));


//Inicio Servidor
app.listen(app.get('puerto'), () => {
    
console.log(`Servidor encontrado en el puerto ${app.get('puerto')}`);
});