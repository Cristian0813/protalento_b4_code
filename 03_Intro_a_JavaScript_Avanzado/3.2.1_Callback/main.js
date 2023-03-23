// EJEMPLO DE DAVID ZONANA
//Tenemos 2 funciones que devuelven un valor

function soyCien(){
    return 100;
  }
  function soyDoscientos(){
    return 200;
  }
  // Esta funcion recibe como parametro 2 funciones y las ejecuta
  function sumaDosFunciones(function1, function2){
    const suma = function1() + function2();
    return suma; //retorna un nuevo valor, en este caso su suma
  }
  // Invocamos a sumaDosFunciones y le pasamos 2 funciones como parametros
  console.log(sumaDosFunciones(soyCien, soyDoscientos));
  // RESULTADO ==> 300
  console.log(soyCien());

  console.log(1)
  setTimeout(function timeout(){
    console.log("2");
  }, 500);
  console.log(3);

  // EJERCICIO 2: ¿Cual es el resultado de este codigo?
  
  console.log("---El 2 y 3 van a la Cola de Ejecución---");
  console.log(1);
  // SetTimeout Espera N segundos para ejecutar un CALLBACK
  // Recibe 2 parametros; SetTimeout(callback, milisegundos)
  setTimeout(()=>{ //Simular Ir a Base de Datos con un callback
    return console.log(2);
  }, 3000);
  setTimeout(()=>{ //Simular Ir a Base de Datos con un callback
    return console.log(3);
  }, 2000);
  console.log(4);
// RESPUESTA: se muestra primero el console log 1, 4, por settimeout se muestra 3, 2 
  
// EJERCICIO 3: ¿Cual es el resultado de este codigo?

console.log("---Simulación de Cuello de Botella")
console.log(1);
setTimeout(()=>{
    return console.log(2);
},2000);
for (let index = 0; index < 999; index++) {
    console.log(index);
};
console.log(3);
//RESPUESTA: se muestra en pantalla el conole log 1,3 despues el for index se carga 999 numeros, despues console log 2, por settimeout

/* Cre una funa función que reciba como argumentos, dos número y un callback, según el callback que se pase a la funcion, se devuelve la suma de los dos números, la resta de los dos números o la multiplicación de los dos números */

function suma (a, b){
    console.log(a+b);
}
function resta (a, b){
    console.log(a-b);
}
function multi (a, b){
    console.log(a*b);
}
function divide (a, b){
    console.log(a/b);
}
function calcular(a, b, callback){
    callback(a, b);
}
calcular(90, 89, suma);
calcular(30, 78, resta);
calcular(76, 9, multi);
calcular(55, 99, divide);

/*Crear una función que reciba como argumento una variable de cualquiere tipo y un callback, la función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.*/

function viewType(variable) {
  console.log(`La variable tiene un valor de ${variable} y tiene un tipo ${typeof(variable)}`);
}
function typeVar(variable, callback) {
  callback(variable);
}
let nombre = 'Paco';
let edad = 23;
let algo = true;
typeVar(algo, viewType);
typeVar(nombre, viewType);
typeVar(edad, viewType);

