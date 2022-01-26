//EcmaScript6 (Versión de JS)
/*
ES6 permite:
El uso de funciones flecha
El uso de scope
map
forEach
Object destructuring
El uso de POO
find
filter
*/

/*
Las funciones flecha (AF ArrowFunction) 
Son funciones tradicionales de JS con una sintaxis
moderna que permite ahorrar lineas de código

_CONTENEDOR_ = (parametros, p) => { _funcionalidad_ };
*/
function holaT() {
    console.log('Hola');
}

const hola = () => console.log('Hola mundo');

hola();

/*
función flecha con parámetros
*/
function hola2T(nombre) {
    console.log(`Hola ${nombre} que gusto`);
}
const hola2 = (nombre) => console.log(`Hola ${nombre} que gusto`);

hola2('T196');

/*
Función flecha con parámetro y retorno
*/
function suma1T(a, b, c) {
    return a + b + c;
}
const suma1 = (a, b, c) => a + b + c;
let resultadoSuma = suma1(1, 2 ,3);
console.log(resultadoSuma);

const operacionesT = {
    suma : function (a, b) {
        return a + b;
    }, 
    resta : function (a, b) {
        return a - b;
    },
    multiplicacion : function (a, b) {
        return a * b;
    }, 
    division :function (a, b) {
        //Si b es igual a 0, retornamos la palabra ERROR
        //de lo contrario hacemos la división
        //forma1
        /*if (b === 0) {
            return "ERROR";
        }

        else {
            return a / b;
        }*/

        //forma2
        //CONDICION ? APLICA : NO_APLICA
        return (b === 0) ? 'ERROR' : a / b;
    }
};

const operaciones = {
    suma : (a, b) => a + b,
    resta : (a, b) => a - b,
    multiplicacion : (a, b) => a * b, 
    division : (a, b) => {
        if (b === 0) {
            return 'ERROR';
        }

        else {
            return a / b
        }
    }
};

console.log(operacionesT.division(23, -2));
console.log(operaciones.suma(23, 2));