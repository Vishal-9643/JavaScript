const user = {
    name : "Vishal",
    id : 1234,
    message : function(){
        console.log(`${this.name} , Welcome to Home`); // this keyword reffers to current context name.
        console.log(this); // this reffers to current context.
        
        
    }
}

user.message();


//  arrow function

// declaration.
const add = (num1 , num2) => {
    return num1+num2;
}
console.log(add(3,7));

// diffrenet syntax of declaration.
const sub = (num1,num2) => (num1-num2) // When we use paranthesis then don't need to use return keyword.
console.log(sub(5,3));



