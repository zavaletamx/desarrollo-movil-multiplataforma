/*
ES6 permite el uso de clases dentro JS

1.- En JS TODAS las clases son públicas no existe 
el modificador de acceso para una clase

2.- Todos los atributos de una clase son públicos y se definen en el 
constructor 

3.- Los modificadores de acceso no aplican para la creación de clases
métodos o atributos 
*/
class Persona {
    
    constructor(nombre, apellido) {
        //Los atributos de JS se dnominan por medio 
        //del modificador de contexto --this--
        this.nombre = nombre;
        this.apellido = apellido;
    }

    /*
    Los métodos se definen únicamente por su nombre
    */
   hola() {
       console.log(`Hola ${this.nombre} ${this.apellido} un gustazo`);
   }
} //termina la clase

class Alumno extends Persona {
    constructor(nombre, apellido, matricula) {
        /*
        El constructor de la clase hija
        debe invocar al constructor de la clase 
        padre por medio super
        */
       super(nombre, apellido);
       this.matricula = matricula;
    }

    datosAlumno() {
        this.hola();
        console.log(`Matrícula: ${this.matricula}`);
    }
}

/*
Instanciamos una clase
*/
const per1    = new Persona('Raúl', 'Zavaleta');
per1.nombre   = 'Juancho';
per1.apellido = 'Hidalgo';
per1.hola();

const alumn1  = new Alumno('Karla Alejandra', 'Anaya', '2007313035');
alumn1.datosAlumno();