/*
Los arreglos en Javascript son colecciones dinámicas, mas 
parecidas a los ArrayList que a los arreglos (Java)

Son arreglos en JS tiene un tamaño dinámico (se pueden agregar y eliminar
    elementos en tiempo de ejecución sin afectar los datos de la colección)

Los arreglos se representan con un par de corchetes
_NOM_ARREGLO_[_ÍNDICE_]
Los arreglos deben ser contenidos en espacios de memoria 
de tipo CONSTANTE
*/
//Indices      0  1  2
//Pos          1  2  3
const arreglo1 = [4, 5.4, "6"];
const arreglo2 = new Array(5); /* Forma Tradicional */
const arreglo3 = [5];
const arreglo4 = new Array(2, 34, 26, "Raúl", false, ['a', 'b', 'c']);

//Visualizar tamaño del arreglo
//_ARREGLO_.length

console.log(arreglo1[0]);
console.log(arreglo2[0]);
console.log(arreglo3[0]);
console.log(arreglo4[0]);

/*
el método push permite agregar elementos al final arreglo
*/
arreglo1.push(123)
arreglo2.push(123)
arreglo3.push(123)
arreglo4.push(123)

console.log(arreglo1, `Tamaño: ${arreglo1.length}`);//Arreglo 1
console.log(arreglo2, `Tamaño: ${arreglo2.length}`);//Arreglo 2
console.log(arreglo3, `Tamaño: ${arreglo3.length}`);//Arreglo 3
console.log(arreglo4, `Tamaño: ${arreglo4.length}`);//Arreglo 4

for (let i = 0; i < 10; i++) {
    console.log('\n\n');
}

for (let i = 0; i < arreglo4.length; i++) {
    console.log(arreglo4[i]);
}

