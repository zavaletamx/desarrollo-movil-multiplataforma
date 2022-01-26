/*
Una función es un bloque de código relacionado 
con un propósito particular, agrupado y denominado
por un nombre
*/
function nombreFuncion() {
    /*
    Las funciones pueden o no, tener un
    valor de retorno
    */        
}

function hola1() {
    console.log('Hola mundo');
}

function hola2 (nombre) {
    console.log(`Hola ${nombre} bienvenido al curso`);
}

/*
Puedes incluir un valor defecto en los parámetros
*/
function hola3(nombre = '---', apellido = '---') {
    console.log(`Hola ${nombre} ${apellido}`);
}

function suma(a, b) {
    return a + b;
}

function sumaDinamica(arreglo = []) {
    let suma = 0;
    /*
    for (let i = 0; i < arreglo.length; i++) {
         suma += arreglo[i];
     } 
    es lo mismo que abajo
    */
    for (const num of arreglo) {
        console.log(num);
        suma += parseInt(num);        
    }
    return suma;
}

//Invocamos a una función por su nombre y sus parámetros
hola1();
const nom = 'Raúl Zavaleta';
let nom2 = "Jonathan";

hola2('Julio');
hola2(nom);
hola2(nom2);
hola3('Isabel', 'Gómez');

//Si una función contiene un valor de retorno 
//este debe almacenarse o mostrarse
console.log(suma(3, 6));

let valorSuma = suma(5, 6);
valorSuma = valorSuma * 2;
console.log(valorSuma);

const arrNumeros = [];

arrNumeros.push(21);
arrNumeros.push(43);
arrNumeros.push(73);
arrNumeros.push(91);
arrNumeros.push(16);

const resultadoNumeros = sumaDinamica(arrNumeros);
console.log(`La suma de todos los números es:${resultadoNumeros}`);

/*
Una función puede empaquetarse en una variable o incluso ser parte de
un arreglo o de un objeto

JS permite la creación de funciones anónimas
*/
const funSuma = function (a, b, c) {
    return a + b + c;
}

/*Si no se usan parámetros en una función anónima, no se ejecuta
la función, se asigna el procedimiento*/
const lafuncionQueSuma = funSuma;

//¿Cómo la uso?
console.log(funSuma(2.4, 4.2, 6.2));
console.log(lafuncionQueSuma(1, 2, 3));

const operaciones = {
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
        return a / b;
    }
};

const valor1 = 2;
const valor2 = 5;

const resSuma = operaciones.suma(valor1,valor2);
const resResta = operaciones.resta(valor1,valor2);
const resMulti = operaciones.multiplicacion(valor1, valor2);
const resDiv = operaciones.division(valor1, valor2);

console.log(`Suma de ${valor1} + ${valor2} = ${resSuma}`);
console.log(`Resta de ${valor1} - ${valor2} = ${resResta}`);
console.log(`Multiplicación de ${valor1} X ${valor2} = ${resMulti}`);
console.log(`División de ${valor1} ÷ ${valor2} = ${resDiv}`);
