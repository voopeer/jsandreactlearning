const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'fdfslkdfks');

if (hamburger === 3 || cola == 2 || fries === 3 && nuggets) {
    console.log('We are not hungry');
} else {
    console.log('We are go out')
}


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);