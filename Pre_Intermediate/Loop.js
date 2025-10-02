// For Loop :

/*  
for(starting ; condition ; increment){
        code
    }
 */

for(let index = 0 ;index<10; index++){ // this loop print 0 to 9 number.
    console.log(index);
    
}

// Nested Loop:
for(let i = 1 ; i<3;i++){
    console.log(`${i} Table : `);
    for(let j = 1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j} `);
        
    }
}

// While Loop :

let num = 1;

while(num<10){
    console.log(`${num}`);
    num++;
    
}

// do - while loop :
// in do-while loop first work done then condtion check so if condition is false it atleast work 1 time.
let score = 1000;
do{
    console.log(score);
    score++;
    
}while(score<1000);


// For - each loop

const arr = [1,2,3,4,5,6,5,43];

arr.forEach(function (item){ // callback function without name.
    console.log(item);
})

// Filter : it returns a value.

const myarr = [1,2,44,5,3,66,8,10];
const values = myarr.filter( (num) => num > 10 );

console.log(values);

// Map : used to do modification in arrays.

const Arr = [1,2,3,4];
const newarr = Arr.map( (num) => num-10 );
console.log(newarr);



