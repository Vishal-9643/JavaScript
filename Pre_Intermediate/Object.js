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

// Singleton object i.e objects declared or used as constructor.

const gameUser = new Object();

gameUser.id = "123fff";
gameUser.name = "Vikram";
gameUser.rank = "Diamond";

console.log(gameUser);

// Nested Objects

const school = {
    id : "1925334",
    name : {
        fullname :{
            Name : "Rajkiya Pratibha Vikas Vidyalaya"
        }
    }
}

console.log(school.name.fullname.Name); 



// Object addition.

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};
const obj3 = {5:'e',6:'f'};

const obj = Object.assign({},obj1,obj2,obj3); // {} means this is target and remaning  are soucre.
console.log(obj);
const obj4 = {...obj1 , ...obj2}; // using spread.
console.log(obj4);

console.log(Object.keys(obj4)); // return array of key.
console.log(Object.values(obj4)); // return array of values.

// Object de-structure:

const subject = {
    subjectName : "JavaScript",
    subjectFees : "00",
    subjectTecaher : "Hitesh Sir"
}

const {subjectTecaher} = subject; // de-structure to avoid repeted use of subject.subjectTeacher.
console.log(subjectTecaher);

const {subjectName : Name} = subject; // changing the name for our convenent not chnages in original object.
console.log(Name);

















