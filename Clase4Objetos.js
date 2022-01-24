/*
Un objeto de javascript es un contenedor de 
elementos almacenados por medio de clave y valor
anidados semánticamente con una profundidad de hasta 
1024 elementos

JSON
----
Java
Script
Object
Notation

NOM_OBJETO = {
    clave : valor, 
    clave : valor, 
    clave : {
        clave : valor, 
        clave : {
            clave : valor
        }
    }
};
*/
const obj1 = {
    matricula : '2007313035', 
    telefono : '442 129 8927', 
    correo : 'raul.zavaletazra@uteq.edu.mx', 
    valorerror : null
};
/*
Agregar contenido al objeto:
obj1._CLAVE_ = 'valor';
obj1['_CLAVE_'] = 'valor';

Si la clave no existe, se agrega una nueva propiedad
al objeto, si la clave existe, se edita el valor de
dicha propiedad
*/
obj1.nombre = 'Raúl'; //Agregamos una propiedad
obj1['apellido1'] = 'Zavaleta'; //Agregamos una propiedad
obj1.apellido2 = 'Zavaleta'; //Agregamos una propiedad
obj1.apellido2 = 'Gómez'; //Editamos una propiedad
obj1['apellido2'] = 'Zea'; //Editamos una propiedad

console.log(obj1);

/*
Accedemos a las propiedades de un objeto por medio
de la sintaxis punto o la sintaxis corchete
*/
console.log(obj1.nombre);
console.log(obj1['apellido1']);

/*
El ciuclo for in permite recorrer un objeto 
a partir de sus propiedades

for (const #NOM_PROP in #NOM_OBJ) {

}
*/
console.log('\n\n\n\n\n');
console.log('\n\n\n\n\n');
console.log('\n\n\n\n\n');

/*
Eliminar una propiedad de un objeto
delete [prop]
*/
delete obj1.valorerror;
//delete obj1['valorerror']; //lo mismo que arriba

for (const clave in obj1) {
    //Visualizar las claves (propiedades)
    //del objeto
    console.log(`${clave} = ${obj1[clave]}`);
}







