// Switch Case Statement.

// Basic Syntax : 

/* switch(key){ 
    case value :
        break;

    default :
        break;
} */

const month = 10;

switch(month){
    case 1 :
        console.log(`January`);
        break;
    case 2 :
        console.log(`Febuary`);
        break;
    case 3 :
        console.log(`March`);
        break;
    case 4 :
        console.log(`April`);
        break;
    case 5 :
        console.log('May');
        break;
    case 6 :
        console.log('June');
        break;
    case 7 :
        console.log(`July`);
        break;
    case 8 :
        console.log(`August`);
        break;
    case 9 :
        console.log(`September`);
        break;
    case 10 :
        console.log(`October`); // this line of code executed because case value match with key value.
        break;
    case 11 :
        console.log(`November`);
        break;
    case 12 :
        console.log(`December`);
        break;
    default:
        console.log(`Invalid Month Number`);
        break;
}

// Terniary Operator : condition ? true : false

const price = 100;

price >= 90 ? console.log("Affordable") : console.log("Expensive");



/* Falsy Values :
1. False
2. 0
3. -0
4. ""
5. BigINT 0n
6. NULL
7. Undefined
8. Nan
*/

/* Truthy Values :
1. true
2. 1
3. "0"
4. "False"
5. " "
6. [] empty array
7. {} empty object

*/

