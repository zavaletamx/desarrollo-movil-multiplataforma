const arr3 = [];

for (let i = 0; i < 5; i++) {
    arr3.push(i+1);
}

arr3.push('Elemento adicional');

/*
Agregar al principio de un arreglo 
*/
arr3.unshift('Otro elemento');

/*
Agregar un elemento al arrego en una posicion 
determinada
*/
//          donde se agrega, elimina alguna pos, que se agrega
//arr3.splice(2,               0,                   "Elemento al medio");
arr3.splice(2,               1,                   "Elemento al medio");
//arr3[2] = "Elemento al medio"; es lo mismo que arriba

/*
Para modificar el valor de un elemento de un arreglo en JS
solo necesitamos el índice
*/
arr3[0] = 0;
arr3[arr3.length-1] = arr3.length-1;

arr3.push("Penúltimo valor arreglo");
arr3.push("Último valor arreglo");

console.log(arr3);
console.log(`Total de elementos en el arreglo: ${arr3.length}`);

/*
Eliminar elemento del final
_ARR_.pop();
*/
arr3.pop();

/*
Eliminar al principio del arreglo
_ARR_.shift()
*/
arr3.shift();
console.log(arr3);
/*
splice pude agregar, editar o eliminar un elementos del arreglo
dependiendo de la configuración de los parámetros
_ARR_.splice(posición, cuantos_elementos_afectados, valor)
Para agregar
_ARR_.splice(0, 0, 'Primer elemento')
Para editar
_ARR_.splice(0, 1, 'Editar Primer elemento')
Para eliminar
_ARR_.splice(0, 1)
*/
arr3.splice(1, 1);
console.log(arr3);
console.log(`Total de elementos en el arreglo: ${arr3.length}`);