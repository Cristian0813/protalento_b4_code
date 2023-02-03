/* EJERCICIO 1 Solicitar al usuario que responda a la pregunta (“¿Eres bellísimo/a?”) encaso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

function ejerBello(respuestaUsuario){
    if (respuestaUsuario ==='si' || respuestaUsuario ==='Si') {
        return(`Ciertamente`);
    } else if (respuestaUsuario === 'no' || respuestaUsuario === 'No') {
        return(`No te creo`);
    } else {
        return(`Por favor responde Bien`);
    }
}
function ejercicio1() {
    const valorIngresado=document.getElementById("input-ejercicio-1").value;
    const resulEjercicio1=ejerBello(valorIngresado);
    const resultado1=document.getElementById("resultado-1");
    const nuevoTexto=document.createTextNode(resulEjercicio1);
    resultado1.innerHTML="";
    resultado1.appendChild(nuevoTexto);
}

/* EJERCICIO 2 Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “X número es divisible entre 2” o “X número.*/

function divisibleEnDos(numero) {
    if (isNaN(numero)) {
        return(numero + " No es un número");
    }else if (parseFloat(numero) % 2 === 0) {
      return(numero + " Es divisible entre 2");
    } else {
      return(numero + " No es divisible entre 2");
    }
}
function ejercicio2() {
    const divisible=document.getElementById("input-ejercicio-2").value;
    const resulEjercicio2=divisibleEnDos(divisible);
    const resultado2=document.getElementById("resultado-2");
    const NuevoTexto=document.createTextNode(resulEjercicio2);
    resultado2.innerHTML="";
    resultado2.appendChild(NuevoTexto);
}

/*EJERCICIO 3 Crear un programa que determine si un número introducido en un PROMPT es par o no, la respuesta será mostrada en un ALERT.*/

function ParImpar(numeroparimpar){
    if (isNaN(numeroparimpar)) {
        return(numeroparimpar + " No es un número");
    }else if (parseFloat(numeroparimpar) % 2 === 0) {
      return(numeroparimpar + " Es par");
    } else {
      return(numeroparimpar + " Es impar");
    }
}
function ejercicio3() {
    const parimpar=document.getElementById("input-ejercicio-3").value;
    const resulEjercicio3=ParImpar(parimpar);
    const resultado3=document.getElementById("resultado-3");
    const NuevoTexto=document.createTextNode(resulEjercicio3);
    resultado3.innerHTML="";
    resultado3.appendChild(NuevoTexto);
}

/*EJERCICIO 4 Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

function NumeroMil(NumeroCliente) {
    if (parseFloat(NumeroCliente) >= 1000) {
      return (NumeroCliente + " Ganaste un premio.");
    } else {
      return ("No eres un feliz ganador. Sigue participando");
    }
}  
function ejercicio4() {
    const UsuarioMil=document.getElementById("input-ejercicio-4").value;
    const resulEjercicio4=NumeroMil(UsuarioMil);
    const resultado4=document.getElementById("resultado-4");
    const NuevoTexto=document.createTextNode(resulEjercicio4);
    resultado4.innerHTML="";
    resultado4.appendChild(NuevoTexto);
}

/*EJERCICIO 5 Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales. */

function compararNumeros(numero1, numero2) {
    if ((parseFloat(numero1) > (parseFloat(numero2)))) {
        return("El número " + numero1 + " es mayor que el número " + numero2);
    } else if ((parseFloat(numero1) < (parseFloat(numero2)))) {
        return("El número " + numero1 + " es menor que el número " + numero2);
    } else {
        return("Los números " + numero1 + " y " + numero2 + " son iguales");
    }
}
function ejercicio5() {
    const compararNumero1=document.getElementById("input-ejercicio-5").value;
    const compararNumero2=document.getElementById("input-ejercicio-5_1").value;
    const resulEjercicio5=compararNumeros(compararNumero1, compararNumero2);
    const resultado5=document.getElementById("resultado-5");
    const NuevoTexto=document.createTextNode(resulEjercicio5);
    resultado5.innerHTML="";
    resultado5.appendChild(NuevoTexto);
}

/*EJERCICIO 6 Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */

function NumeroMayor(mayor1, mayor2, mayor3) {
    if (parseFloat(mayor1) > parseFloat(mayor2) && parseFloat(mayor1) > parseFloat(mayor3)) {
        if(parseFloat(mayor2) === parseFloat(mayor3)) {
            return("Los números " + mayor2 + " y " + mayor3 + " están repetidos. El número mayor es " + mayor1 + ".");
        }
        return("El número " + mayor1 + " es el mayor"); 
    } else if (parseFloat(mayor2) > parseFloat(mayor1) && parseFloat(mayor2) > parseFloat(mayor3)) {
        if(parseFloat(mayor1) === parseFloat(mayor3)) {
            return("Los números " + mayor1 + " y " + mayor3 + " están repetidos. El número mayor es " + mayor2 + ".");
        }
        return("El número " + mayor2 + " es el mayor");
    } else if (parseFloat(mayor3) > parseFloat(mayor1) && parseFloat(mayor3) > parseFloat(mayor2)) {
        if(parseFloat(mayor1) === parseFloat(mayor2)) {
            return("Los números " + mayor1 + " y " + mayor2 + " están repetidos. El número mayor es " + mayor3 + ".");
        }
        return("El número " + mayor3 + " es el mayor");
    } else if (parseFloat(mayor2) === parseFloat(mayor3)) {
        return("El número menor es el: " + mayor1 + ". " + "Y el número " + mayor2 + " está repetido con el "+ mayor3 +".");
    } else if (parseFloat(mayor1) === parseFloat(mayor3)) {
        return("El número menor es el: " + mayor2 + ". " + "Y el número: " + mayor1 + " está repetidocon el "+ mayor3 +".");
    } else if (parseFloat(mayor1) === parseFloat(mayor2)) {
        return("El número menor es el: " + mayor3 + ". " + "Y el número " + mayor1 + " está repetido con el "+ mayor2 +".");
    } else if (parseFloat(mayor1) === parseFloat(mayor2) && parseFloat(mayor2) === parseFloat(mayor3)){
        return("Todos los números iguales");
    }
}
function ejercicio6() {
    const valorMayor1 = document.getElementById("input-ejercicio-6").value;
    const valorMayor2 = document.getElementById("input-ejercicio-6-1").value;
    const valorMayor3 = document.getElementById("input-ejercicio-6-2").value;
    const resulEjercicio6 = NumeroMayor(valorMayor1, valorMayor2, valorMayor3);
    const resultado6=document.getElementById("resultado-6");
    const NuevoTexto=document.createTextNode(resulEjercicio6);
    resultado6.innerHTML="";
    resultado6.appendChild(NuevoTexto);
}

/*EJERCICIO 7 Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/

function mostrarSemana(diaSemana){
    if (diaSemana === "lunes") {
        return ("Es lunes, ¡todo el éxito para ti!");
    } else if (diaSemana === "viernes") {
        return ("Es viernes. ¡Ya llego el fin de semana!");
    } else if (diaSemana === "sabado" || diaSemana === "sábado" || diaSemana === "domingo") {
        return ("Llego el dia más esperado " + diaSemana + " para disfrutar un merecido descnaso.");
    } else {
        return ("Es " + diaSemana + " otro día de la semana, ¡hay que seguir trabajando!");
    }
}
function ejercicio7(){
    const SemanaDia=document.getElementById("input-ejercicio-7").value;
    const resulEjercicio7=mostrarSemana(SemanaDia);
    const resultado7=document.getElementById("resultado-7");
    const NuevoTexto=document.createTextNode(resulEjercicio7);
    resultado7.innerHTML="";
    resultado7.appendChild(NuevoTexto);
}

/*EJERCICIO 8 Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/

function NumeroNota(nota) {
    if (parseFloat(nota) >= 1 && parseFloat(nota) <= 10) {
      if (parseFloat(nota) < 6) {
        return (nota + " Reprobaste tienes que estudiar más");
      } else if (parseFloat(nota) >= 6 && parseFloat(nota) <= 8) {
        return (nota + " Estas regular sigue aprendiendo");
      } else if (parseFloat(nota) === 9) {
        return (nota + " es una buena nota sigue así. ¡Te felicito!");
      } else {
        return (nota + " Es una excelente nota. ¡Te felicito!");
      }
    } else {
      return (nota + " Error: La calificación debe estar entre 1 y 10.");
    }
}
function ejercicio8(){
    const Calificado=document.getElementById("input-ejercicio-8").value;
    const resulEjercicio8=NumeroNota(Calificado);
    const resultado8=document.getElementById("resultado-8");
    const NuevoTexto=document.createTextNode(resulEjercicio8);
    resultado8.innerHTML="";
    resultado8.appendChild(NuevoTexto);
}

/*EJERCICIO 9 Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
    ● El helado sin topping cuesta 50 MXN.
    ● El topping de oreo cuesta 10 MXN.
    ● El topping de KitKat cuesta 15 MXN.
    ● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

const precioBase = 50;
const precioOreo = 10;
const precioKitKat = 15;
const precioBrownie = 20;

function calcularPrecio() {
    let toppingPrice = precioBase;
    if (document.getElementById("oreo").checked) {
      toppingPrice += precioOreo;
    }if (document.getElementById("kitkat").checked) {
      toppingPrice += precioKitKat;
    }if (document.getElementById("brownie").checked) {
      toppingPrice += precioBrownie;
    }if (document.getElementById("ninguno").checked) {
      toppingPrice = precioBase;
    }
    return toppingPrice;
}
const botonOreo = document.getElementById("oreo");
botonOreo.addEventListener("click", function() {
    document.getElementById("ninguno").checked = false;
    const resultado = document.getElementById("resultado-9");
    resultado.textContent = "El precio total es de " + calcularPrecio("oreo") + " MXN.";
});
const botonKitKat = document.getElementById("kitkat");
botonKitKat.addEventListener("click", function() {
    document.getElementById("ninguno").checked = false;
    const resultado = document.getElementById("resultado-9");
    resultado.textContent = "El precio total es de " + calcularPrecio("kitkat") + " MXN.";
});
const botonBrownie = document.getElementById("brownie");
botonBrownie.addEventListener("click", function() {
    document.getElementById("ninguno").checked = false;
    const resultado = document.getElementById("resultado-9");
    resultado.textContent =
    "El precio total es de " + calcularPrecio("brownie") + " MXN.";
});
const botonNinguno = document.getElementById("ninguno");
botonNinguno.addEventListener("click", function() {
    document.getElementById("oreo").checked = false;
    document.getElementById("kitkat").checked = false;
    document.getElementById("brownie").checked = false;
  
const resultado = document.getElementById("resultado-9");
resultado.textContent =
"El precio total es de " + calcularPrecio("ninguno") + " MXN.";
});

/*EJERCICIO 10 Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses*/

let precioInicial = 0;
let precioFinal = 0;
let duracion = 0;

function calcularDescuento() {
  const programa = document.getElementById("programa").value;
  if (programa === "programaCourse" || programa === "programaCarrera" || programa === "programaMaster") {
    const beca = document.getElementById("beca").value;
    if (beca === "ningunaBeca" || beca === "facebookBeca" || beca === "googleBeca" || beca === "jesuaBeca") {
      if (programa === "programaCourse") {
        precioInicial = 4999;
        duracion = 2;
      } else if (programa === "programaCarrera") {
        precioInicial = 3999;
        duracion = 6;
      } else if (programa === "programaMaster") {
        precioInicial = 2999;
        duracion = 12;
      }
      if (beca === "ningunaBeca") {
        precioFinal = precioInicial;
      } else if (beca === "facebookBeca") {
        precioFinal = Math.round(precioInicial * (80 / 100));
      } else if (beca === "googleBeca") {
        precioFinal = precioInicial * (85 / 100);
      } else if (beca === "jesuaBeca") {
        precioFinal = precioInicial * (50 / 100);
      }
    }
  }
}
function ejercicio10() {
    calcularDescuento();
    document.getElementById("resultado-10").innerHTML = "$" + precioFinal + " MXN, con duración de " + duracion + " Meses."; 
}

/*EJERCICIO 11 Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.*/

function calcularTotal(vehiculo, distancia, litros) {
    let distanciaMoto = 0.1;
    let distanciaCoche = 0.2;
    let distanciaAutobus = 0.5;
    let gasolina = 0;
    let litroTotal = 0;
  
    if (!distancia || !litros || !vehiculo) {
      return "Debe ingresar una distancia, una cantidad de litros y un tipo de vehículo válidos";
    }
  
    if (isNaN(distancia) || isNaN(litros)) {
      return "La distancia y la cantidad de litros deben ser números";
    }
  
    if (parseFloat(litros) <= 0 || parseFloat(litros) > 100) {
      return "La cantidad de litros debe ser mayor a 0 y menor o igual a 100";
    }
  
    if (vehiculo !== "moto" && vehiculo !== "coche" && vehiculo !== "autobus") {
      return "El tipo de vehículo debe ser 'moto', 'coche' o 'autobus'";
    }
  
    if (parseFloat(litros) > 0 && parseFloat(litros) <= 50) {
      gasolina += 5;
    } else {
      gasolina += 10;
    }
  
    if (vehiculo === "moto") {
        litroTotal = distanciaMoto * distancia + gasolina;
    } else if (vehiculo === "coche") {
        litroTotal = distanciaCoche * distancia + gasolina;
    } else if (vehiculo === "autobus") {
        litroTotal = distanciaAutobus * distancia + gasolina;
    }  
    return `El costo total es del recorrido es: ${litroTotal}`;
}
  
function ejercicio11() {
    let vehiculo = document.getElementById("inputEjercicio11-1").value.toLowerCase();
    let distancia = document.getElementById("inputEjercicio11-2").value;
    let litros = document.getElementById("inputEjercicio11-3").value;
    let gasolinaTotal = calcularTotal(vehiculo, distancia, litros);
    let distanciaTotal = document.getElementById("resultado-11");
    distanciaTotal.innerHTML = "";
    distanciaTotal.innerHTML = gasolinaTotal;
}
  

/*Evento checKEnter*/

function checkEnter(event) {
    if (event.keyCode === 13) {
        if (event.target.id === 'input-ejercicio-1') {
            ejercicio1();
        }else if (event.target.id === 'input-ejercicio-2') {
            ejercicio2();
        }else if (event.target.id === 'input-ejercicio-3') {
            ejercicio3();
        }else if (event.target.id === 'input-ejercicio-4') {
            ejercicio4();
        }else if (event.target.id === 'input-ejercicio-5') {
            ejercicio5();
        }else if (event.target.id === 'input-ejercicio-5.1') {
            ejercicio5();
        }else if (event.target.id === 'input-ejercicio-6') {
            ejercicio6();
        }else if (event.target.id === 'input-ejercicio-6-1') {
            ejercicio6();
        }else if (event.target.id === 'input-ejercicio-6-2') {
            ejercicio6();
        }else if (event.target.id === 'input-ejercicio-7') {
            ejercicio7();
        }else if (event.target.id === 'input-ejercicio-8') {
            ejercicio8();
        }else if (event.target.id === 'input-ejercicio-11'){
            ejercicio11();
        }
    }
}