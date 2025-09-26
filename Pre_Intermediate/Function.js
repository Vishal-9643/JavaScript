// FUNCTIONS :

//  function declaration
function printName(){
    console.log("Vishal");
    
}

printName(); // Function Calling or Executing.

function add(num1 , num2){ // function declared with parameters num1 and num2.
    console.log(num1+num2);
    
}
add(89,976); // calling function with argumnets 89 , 976.

function user(username){ // Funtion declared with return so it does not print anything.
    return `${username} logged in.`
}

const message = user("Vishal"); //function returns something which stored in variable message.
console.log(message);
console.log(user()); // if we donot pass arguments then it is undefined.
