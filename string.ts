import { servicesVersion } from "typescript";

//Declaración de cadenas de texto de diferentes formas
let pelicula: string = "Million Dollar Baby";
let serie: string = 'True Detective';
let poema: string = `Queja de Alfonsina Storni. ...
Paz de Alfonsina Storni. ...`;

//Operaciones

let programas: string = "Mis programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);

//Expresiones regulares
let programas2: string = `Mis programas favoritos son: ${pelicula} y ${serie}`
console.log(programas2);

let edad: number = 23;
let edad_futura: string = `El siguiente año mi edad será ${edad + 1}`;
console.log(edad_futura)

//Metodos
console.log(programas.charAt(0)); //Letra
console.log(programas.toUpperCase()); //Conversión Mayúsculas
