let name = "    Vishal Prajapati       "
console.log(name.length);

// using prototype 

// adding method in String data sturcture by using prototpye.
String.prototype.truelenght = function(){
    return this.trim().length;
}

console.log(name.truelenght()); // its return string true length.

// By adding method in Object data type it add method to all other data types.

// Prototyple inheritance
const user = {
    name : "Vishal",
    age : 19
}

const student = {
    id : 101
}

Object.setPrototypeOf(student,user); // student can access user details.

console.log(student.age);

