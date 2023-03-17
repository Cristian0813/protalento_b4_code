// 1. ¿Cuál es la salida de este código?
/* console.log('start');
const promise1 = new Promise((resolve, reject) => {
console.log(1);
})
console.log('end');*/

// 2. ¿Cuál es la salida de este código?

/* console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
promise1.then(res => {
    console.log(res)
})
console.log('end');
// sale primero START despues (1), luego sale END y por ultimo (2) */

//3. ¿Cuál es la salida de este código?

/* console.log('start');
const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
console.log(3)
})
promise1.then(res => {
console.log(res)
})
console.log('end');
//Se ejecuta primero el START, luego (1), el que sigue es el (3), luego el END y por ultimo el (2) */

/* // 4. ¿Cuál es la salida de este código?
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
})
promise1.then(res => {
    console.log(2)
})
console.log('end');
// Primero sale START, luego (1), y por ultimo el END, la variable res no se encuentra definida por esta razon no se muestra*/


//5. ¿Cuál es la salida de este código?
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
}))
console.log('middle')
fn().then(res => {
    console.log(res)
})
console.log('end')
// primero sale el START, luego MIDDLE,

// 6. ¿Cuál es la salida de este código?
console.log('start')
Promise.resolve(1).then((res) => {
console.log(res)
})
Promise.resolve(2).then((res) => {
console.log(res)
})
console.log('end')

/*7. ¿Cuál es la salida de este código?
console.log('start')
setTimeout(() => {
console.log('setTimeout')
})
Promise.resolve().then(() => {
console.log('resolve')
})
console.log('end')
8. ¿Cuál es la salida de este código?
const promise = new Promise((resolve, reject) => {
console.log(1);
setTimeout(() => {
console.log("timerStart");
resolve("success");
console.log("timerEnd");
}, 0);
console.log(2);
});
promise.then((res) => {
console.log(res);
});
console.log(4);
9. ¿Cuál es la salida de este código?
console.log('start');
const promise1 = Promise.resolve().then(() => {
console.log('promise1');
const timer2 = setTimeout(() => {
console.log('timer2')
}, 0)
});
const timer1 = setTimeout(() => {
console.log('timer1')
const promise2 = Promise.resolve().then(() => {
console.log('promise2')
})
}, 0)
console.log('end');*/