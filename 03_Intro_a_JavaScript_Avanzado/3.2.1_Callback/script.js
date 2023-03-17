/* 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console. */
function MensajeInformativo(callback) {
  console.log("Hola mundo");
  callback();
}
function nombre() {
  console.log("Soy yo");
}
MensajeInformativo(nombre);
 /* 2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. */
 function verType(variable) {
  console.log(`La variable tiene un valor  de ${variable} y tiene  un tipo ${typeof(variable)}`);
 }
function parametro(variable, callback) {
  const cualquier = 2;
  typeof variable;
  callback(cualquier, variable);
}
let nombre = 'Cristian';
let edad = 32;
let algo = true;
parametro (algo, verType);
parametro (edad, verType);
parametro (nombre, verType);

/* 3.- Crear una función que reciba como argumentos, dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números o la multiplicación de los dos números.*/

  function suma(a, b) {
    console.log(a + b);    
  }
  function resta(a, b) {
    console.log(a - b);    
  }
  function multi(a, b) {
    console.log(a * b);    
  }
  function divi(a, b) {
    console.log(a / b);    
  }
  function calcu(a, b, callback) {
    callback (a, b);
  }
  calcu (8, 9, suma);
/* 4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO */

/* 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
    EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.
*/