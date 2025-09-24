// Array Declaration and elements accessing : 

const arr = [2,5,3,1.6] // array are declared by using square bracket.

console.log(arr[0]); // array indexing start from 0 i.e. arr[0] means 1st element of array.

const arr2 = new Array(7,8,9,0) // Array declared using new keyword.

// Array Methods : 

const myarr = [1, 3, 2, 4];

myarr.push(5); // used to add element at ending of array.
myarr.push(8);
console.log(myarr);

myarr.pop(); // used to remove element from end  of array.
console.log(myarr);

myarr.unshift(10); // used to add element at starting of array.
myarr.unshift(14);
console.log(myarr);

myarr.shift() // used to remove starting element.
console.log(myarr);

console.log(myarr.includes(89)); // used to check that element present or not and output is boolean type.

console.log(myarr.indexOf(5)); // used to find index of that element.

const newArr = myarr.join(); // used to convert array into string as it is (includes ',');
console.log(newArr);

const n1 = myarr.slice(1,4) // used print subarray where last index exluding.
console.log(myarr);
console.log(n1);

const n2 = myarr.splice(1,4) // it manipulate the array and remove subarray including last index.
console.log(myarr);
console.log(n2);














