// Ejercicio de cristian npm i omelette

// fuente saca de Github 
// https://github.com/f/omelette
// https://github.com/f/omelette/issues/33#issuecomment-439864555

var omelette = require('omelette');
var completion = omelette('hello <name> <surname>')

// This is your logic
completion.on('name', ({reply}) => { reply(['fatih', 'rotimi']) });
completion.on('surname', ({reply}) => { reply(['akin', 'best']) });

completion.init();

console.log('Hello i am the program');