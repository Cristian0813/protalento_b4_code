// A. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

var divisor=prompt("Escribe un número y te dire si es divisible entre dos:");

if ((parseFloat(divisor)%2)===0) {
    document.write(divisor + " Es divisible" + "<br>");
} else {
    document.write(divisor + " No es divisible" + "<br>");
}

// B. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var parimpar=prompt("Escribe un número y te dire si es par o impar: ");

if ((parseFloat(parimpar)%2)===0) {
    document.write("<br>" + parimpar + " Es par" + "<br>");
} else {
    document.write("<br>" + parimpar + " Es impar" + "<br>");
}

// C. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

var num1000=prompt("Escribe tu número de cliente: ");

if (parseFloat (num1000)>1000) {
    document.write("<br>" + num1000 + " Ganaste un premio." + "<br>");
} else {
    document.write("<br>" + num1000 + " Lo sentimos, sigue participando." + "<br>");
}

//D. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numenor1=parseFloat(prompt("Escribe el primer número: "));
let numenor2=parseFloat(prompt("Escribe el segundo número: "));

if(numenor1 <= numenor2){
    document.write("<br>" + "El número menor es " + numenor1);
}else if(numenor2 <= numenor1){
    document.write("<br>" + "El número menor es " + numenor2);
}else{
    document.write("<br>" + "El primer numero " + numenor1 + " y el segundo número " + numenor2 + "son iguales");
}

//E. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numayor1=parseFloat(prompt("Escribe el primer número: "));
let numayor2=parseFloat(prompt("Escribe el segundo número: "));
let numayor3=parseFloat(prompt("Escribe el tercer número: "));

if(numayor1 >= numayor2 && numayor1 >= numayor3){
    document.write("El número mayor es " + numayor1);    
}else if(numayor1 >= numayor2 && numayor1 >= numayor3){
    document.write("El número mayor es " + numayor1);    
}else if(numayor2 >= numayor3 && numayor2 >= numayor3){
    document.write("El número mayor es " + numayor2);    
}else{
    document.write("El número mayor es " + numayor3);
}


