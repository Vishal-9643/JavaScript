// Immediatly Invoked Function Expression (IIFE)

//  IIFE synatx : ()() 1st paranthesis for funtion declaration second for invoking.

// Named IIFE
(function user(){
    console.log(`Hello World`);
    
})(); // ';' terminator key is important because when we declare two IIFE second give error.

( (name) => {
    console.log(`${name} hello ji.`);
    
})('Vishal');
