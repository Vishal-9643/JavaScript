//  Promise creating:
const promise1 = new Promise(function(resolve , reject){
    // Do aysnc task 
    // DB call , network call etc

    setTimeout(function(){
        console.log("Aysnc task is completed");
        resolve() // connecting resolve and .then().
    },1000)
})

// Promise consuming
promise1.then(function(){ // .then() has connection with resolve.
    console.log("Consumed Successfully");
    
})

// Promise with data consumption
const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Vishal" , userid : "101"}) // passing object data in resolve as a parameter
    },1000)
})

promise2.then(function(user){ // resolve all data is available in then function.
    console.log(user);
    
})

// Using catch
const promise3 = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
        resolve({user : "Vivek" , pass : "Vivek@8287"})
    }else{
        reject('Error : Something Went Wrong') // connected it with .catch()
    }
})

promise3.then(function(user){
    console.log(user);
    
})
.catch(function(err){ 
    console.log(err);
    
})

// using async and await
promise4 = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
        resolve({user : "kuldeep" , pass : "kuldeep@7290"})
    }else{
        reject('Error : JS Went Wrong') // 
    }
})

async function consumed() {
    try {
        const response = await promise4
        console.log(response);
    } catch (error) {
        console.log("Error occur");
        
    }
    
}
consumed()