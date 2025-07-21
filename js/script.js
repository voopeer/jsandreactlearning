if ( 4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Much');
} else {
    console.log('OK!');
}



switch (num) {
    case 49: 
        console.log('False');
        break;
    case 100: 
        console.log('False');
        break;
    case 50: 
        console.log('True');
        break;
    default:
        console.log('No in this moment');
        break;
}