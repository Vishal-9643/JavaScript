// If-Else Statements.


/* Syntax : if(condition){ 
               code
            }else{ 
               code
            }*/
// when condition is true then if block code executed &  condition is false then else block code is executed.

const age = 20;

if(age>=18){ 
    console.log(`Eligible for vote.`); // this line executed because if condition is true.
    
}else{
    console.log(`Not Eligible for vote`);
    
}


// If - Else if - Else statement .

// when any of condition become true that block of code executed otherwise else block code executed.

/* if(condition){
    code
}else if(condition){
    code
}else if(condition){
    code
}else{

} */

const money = 1000;

if(money < 100){
    console.log(`Poor`);
    
}else if(money < 400){
    console.log(`Middle Class`);
    
}else if(money <700){
    console.log(`UpperMiddle Class`);
    
}else{
    console.log(`Rich`); // this line executed.
    
}