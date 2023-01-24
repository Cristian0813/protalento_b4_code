const array = [1,2,3,4,5,6,7,8,9,10];
// Inicialización => let inex = 0;  index => contador;
// Condicional => inde < array.length => condicion de paro
// si cumple
    // Bloque de codigo ()
    // Incremento |  Decremento => index ++
// si no cumple la condicion el FOR termina
    // nada, ,se acabo 

const myNuevoArreglo=[];
for (let index = 0; index < array.length; index++ ){
    // const element  =  array [index];
    console.log(array[index]);
    myNuevoArreglo.push(array[index]);
}
console.log(myNuevoArreglo);

const pares1 = [];

for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    if(array[index] % 2 === 0 ) {
        pares1.push(array[index]);
    }
}

const pares2 = [];
//                                      index = index + 2
for (let index = 1; index < array.length; index += 2) {
    // const element = array[index];
    // console.log(array[index]);
    pares2.push(array[index]);
}

console.log(pares1);
console.log(pares2);

const arreglo100 = [];

for(let index = 1; index <= 100; index++) {
    arreglo100.push(index);
};

const pares3 = [];
for (let index = 0; index < arreglo100.length; index++) {
    // const element = array[index];
    if(arreglo100[index] % 2 === 0 ) {
        pares3.push(arreglo100[index]);
    }
}

console.log(pares3);
