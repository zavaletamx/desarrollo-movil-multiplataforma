/*
Un ciclo es una estructura de control que permite 
iterar un bloque de código, iniciando y terminando a 
partir de una expresión
    +for
    +while
    +do while
    *for in
    *forEach
    *map
*/

//for con iterador externo
// let i = 0;
// for(i = 0; i < 100; i++) {
//     console.log(`Vuelta: ${i+1}`);
// }

//for con iterador interno
// for(let j = -10; j < 10; j++) {
//     console.log(`Vuelta: ${j}`);        
// }

/*
While permite generar ciclos con una expresión 
aritmética o lógica y el incremento del iterador
queda a cargo del desarrollador 
*/
// let h = 0;
// while (h > 10) {
//     console.log(h);
//     h++;
// }

/*
Do While se ejecuta al menos una vez, independientemente
de la condición
*/
let k = 5;
do {
    console.log(`k vale: ${k}`);
    k--;
} while(k > 10);