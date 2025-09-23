// Into number conversion.

let name = "Vishal";
let num = "2345";
let alphanum = "123ab23";
let isbool = true;
let id;
let money = null;

let numName = Number(name); // Type is number but value is NaN(not a number).
let numNum = Number(num); // Type is number and value is 2345.
let numAlpha = Number(alphanum); // Type is number but value is NaN.
let numBool = Number(isbool);// Type is number and value is 1 for true and 0 for false.
let numId = Number(id); // Type is number but value is NaN.
let numMoney = Number(money); // Type is number and value is 0 for null.

console.table([typeof numName , typeof numNum , typeof numAlpha, typeof numBool, typeof numId, typeof numMoney]);
console.table([numName, numNum,numAlpha, numBool, numId, numMoney]);

// Into Boolean Conversion.
 // 1. Number to boolean : 0 => false , 1 and greater than 1 => true.
 // 2 string to boolean : "" => false , "Vis" => true;

// Into String Conversion.
 // 1. Number to string : 22 => "22".
 // 2. Boolean to string : true => "true" ; false => "false".

 
 