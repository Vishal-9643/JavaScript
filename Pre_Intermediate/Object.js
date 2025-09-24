// Object literals

const mySym = Symbol("key1") // Declaring symbol.

const user = { 
    // object store data in key:value pair.
    name : "Vishal",
    [mySym] : "mykey1", // using symbol as a key.
    age : 19,
    email : "vishal@google.com",
    location : "Delhi",
    "full name" : "Vishal Prajapati"
}

console.log(user.age); // accessing the element.
console.log(user["full name"]); // another method for accessing used when key is declared as string.

user.email = "vishal@email.com"; // updating or changing the value.
console.log(user.email);

Object.freeze(user); // used to freeze object i.e value or keys can not be changed after this.
user.email = "vvvv"; // here email does not update or change.
console.log(user);

const user2 = {
    name : "vivek"
}

user2.age = 19; // adding new data into object.
console.log(user2);

// adding function into a object.
user2.greeting = function(){
    console.log(`Hello Mr. ${this.name}`);
    
}
console.log(user2.greeting());








