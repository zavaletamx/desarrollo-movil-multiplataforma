/*
El tema de HotLinking y Spread aplica igual que 
en los arreglos

Por defecto la asignación de un objeto a otro resulta en una referencia
del contenido del primero

Si se desea crear copias separadas del valor de un objeto, sea crea
una copia utilizando el operador spread
*/
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1; //Referencia los valores son iguales siemp¡re
obj1.d = 4; //Afecta a obj1 y a obj2

console.log(`Obj1: ${JSON.stringify(obj1)}`);
console.log(`Obj2: ${JSON.stringify(obj2)}`);

/*
Copias separadas del mismo objeto
*/
const obj3 = {e : 7, f : 8, g : 9}
const obj4 = {...obj3}; //Copia independiente 
obj3.h = 10; //Solo afecta a obj3

console.log(`Obj3: ${JSON.stringify(obj3)}`);
console.log(`Obj4: ${JSON.stringify(obj4)}`);
