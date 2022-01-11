/*
Una condición permite evaluar una expresión 
para decidir el flujo de un programa

Las expresiones se derivan del uso de 
operadores lógicos
= -----> asignación
== ----> igual a 
=== ---> idéntico a 
> -----> mayor que
< -----> menor que 
>= ----> mayor o igual que
<= ----> menor o igual que
!= ----> diferente a 
!== ---> diferente idénticamente a
*/

let a = -3;
let b = "1";

//Asignación
// if (a = b) {
//     console.log("A es igual a B")
// }

// else {
//     console.log("A no es igual a B")
// }

//Comparamos el valor sin importar el tipo de dato
if (a == b) {
    console.log(`${typeof a}:${a} es igual a ${typeof b}:${b}`);
}

//Comparamos el valor y el tipo de dato
if (a === b) {
    console.log(`${typeof a}:${a} es igual a ${typeof b}:${b}`);
}

else {
    console.log(`${typeof a}:${a} NO ES IDÉNTICO A ${typeof b}:${b}`);
}

//Comparamos que SOLO el valor sea diferente
if (a != b) {
    console.log(`${typeof a}:${a} es diferente a ${typeof b}:${b}`);
}

else {
    console.log(`${typeof a}:${a} NO diferente a ${typeof b}:${b}`);
}

//Comparar que el valor JUNTO CON EL TIPO DE DATO SEAN DIFERENTES
if (a !== b) {
    console.log(`${typeof a}:${a} es diferente en tipo y valor ${typeof b}:${b}`);
}

if (a == b) {
    console.log(`${a} es igual que ${b}`);
}

else if (a > b) {
    console.log(`${a} es mayor que ${b}`);
}

else {
    console.log(`Pues entonces....
${a} es menor que ${b}`);
}

let numeros = '123';

switch (numeros) {
    case '1' : 
    case '123' : 
    console.log(`${numeros} es 1 o 123!`)
    break;

    case '2' : 
    console.log(`${numeros} es 1!`)
    break;

    default : 
    console.log(`${numeros} no es ni uno, ni dos...    -____- `);
    break;
}






