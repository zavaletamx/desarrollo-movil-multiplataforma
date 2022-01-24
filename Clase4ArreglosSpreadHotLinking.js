/*
Los arreglos por defecto en JS están ligados al valor, 
las referencias de un arreglo a otro, apuntan a la dirección 
de memoria del primero
Si necesitamos crear una copia independiente de un arreglo
utilizamos el operador spread
contenedor = ...VALOR_A_COPIAR
*/

const arr1 = [1, 2, 3, 4, 5];

/*
Si asignamos un arreglo a otro, generamos una referencia
Si modificamos cualquiera de los dos, ambos se verán afectados
*/
const arr2 = arr1; 

arr1.push(11);
arr2.push(1920);

console.log(`Arreglo1: ${arr1}`);
console.log(`Arreglo2: ${arr2}`);

const arr3 = [6, 7, 8, 8, 9, 10];
const arr4 = [...arr3];

arr3.push(1001);
arr4.push(2077);

console.log(`Arreglo3: ${arr3}`);
console.log(`Arreglo4: ${arr4}`);