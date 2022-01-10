/*
JavaScript es un lenguaje de programación
con reglas similares a C, C++ y Java, pero mezcla la 
facilidad y flexibilidad de otras plataformas como Python
*/

//Comment de una línea

/*
JS es un lenguaje estrcuturado, sin mebargo es posible escalarlo al paradigma
otientado a objetos
*/

//Las impresiones de pantalla en JS se realizan por medio de
//console.log(args...)
//console.log("Hola mundo")

//Para ejecutar este Script, corremos desde terminal
//utilizando el compilador de node
//terminal -> node holaMundo.js

/*
El uso de punto y coma en JS es opcional aunque 
las buenas practicas de ES6 recomiendan si utilizarlo
*/4

/*
El delimitador defecto de las cadenas de texto es ambiguo 
"Hola mundo" === 'Hola mundo'

ES6 recomienda el uso de String con apostrofes 'Así'
*/
//console.log("Hola");
//console.log('Mundo');

//console.log() permite imprimir N elementos a la vez
console.log('Hola', "mundo\n", '¿cómo', "están?");

//Para JS todo es un String

/*
JavaScript permite almacenar valores en tiempo de ejecucación en 3
estructuras diferentes:
var -----> variable sin alcance (scope y contexto)
let -----> variables con alcance (con scope y contexto)
const ---> valores inmutables desde su creación
*/

//Var es el tipo de variable clásica de JS, con un alcance global
var   nombre    = "Raúl";

//Let es una variable con alcance definido
let   matricula = "2007313035";

//Const es una estructura inmutable desde su creacón
const rfc       = 'ZAZR880529GB5';

nombre = "Joaquín";
matricula = '2022131222';
//rfc = 'ZAZZJ1212MDIWJD'; ESTO NO ES POSIBLE

console.log(nombre);
console.log(matricula);
console.log(rfc);

/*
NOTA:
Ya para desarrollar en móvil SOLO usaremos LET y CONST
*/

let nombreCompleto = 'Raúl Zavaleta Zea';
let edad = 33;
let peso = 100.5;
let soltero = false;

console.log(nombreCompleto, edad, peso, soltero);

//typeof retorna el tipo de dato de una variable
console.log(
    "Tipo de dato de nombreCompleto:", 
    typeof nombreCompleto
);

console.log(
    "Tipo de dato de edad:", 
    typeof edad
);

console.log(
    "Tipo de dato de peso:", 
    typeof peso
);

console.log(
    "Tipo de dato de soltero:", 
    typeof soltero
);

/*
Intercambio de tipo de dato
parseInt ------> entero
parseDouble ---> double
parseFloat ----> flotante
toString ------> Convierte a string
*/
let numeroConvertir = "mil quinientos";
let numeroOk  = parseInt(numeroConvertir);

console.log("numeroOk", numeroOk);
//El valor NaN en JS significa; NotANumber

/*
Hola soy Raúl Zavaleta
Edad: 33 años    M:2007313035
*/
console.log('Hola soy', nombreCompleto);
//Concatenamos utilizando el símbolo de +
console.log('Edad:', edad, 'años', '\tM:'+matricula);

console.log('Hola soy ' + nombreCompleto);
console.log('Edad: ' + edad +' años \tM:' + matricula);

/*
Interpolación nos permite dar formato a un texto junto 
con expresiones en la misma cadena

Utiliza el símbolo de 'backticks' acentro circunflejo (al revés)
*/
console.log('Hola\nmundo');
console.log(`Hola
Mundo`);

/*
La interpolcación permite agregar expresiones a la cadena
utilizando la nomclatura ${_EXP_}
*/
console.log(`Hola mi nombre es ${nombreCompleto}
Edad: ${edad} años \tM:${matricula}`);


