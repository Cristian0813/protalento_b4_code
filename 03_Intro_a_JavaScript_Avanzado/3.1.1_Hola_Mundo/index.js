suma = 9 * 5;
console.log("Hello World", suma);

/*process.argv.forEach(function (val, index, array) {
    console.log(index +':'+ val + array); 
});*/

/* Ejercicio con los que teniamos*/

let aleatorio = [];
for (let i = 0; i < 10; i++) {
    aleatorio.push(Math.floor(Math.random()*100));    
}
console.log(aleatorio);

function ejerBello(respuestaUsuario){
    if (respuestaUsuario ==='si' || respuestaUsuario ==='Si') {
        return(`Ciertamente`);
    } else if (respuestaUsuario === 'no' || respuestaUsuario === 'No') {
        return(`No te creo`);
    } else {
        return(`Por favor responde Bien`);
    }
}
console.log(ejerBello('no'));