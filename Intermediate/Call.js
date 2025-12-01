function Setuser(username){
    this.username = username
}

function createuser(username , email , password){
    Setuser(username) // here it is called but it's content get out from call stack so username not available.
    this.email = email;
    this.password = password;
}

const user1 = new createuser("Vivek", "vivek@email.com" , 12321);
 
// here only email and password is printing username not showing.
console.log(user1);

// to avoid this we use .call()

function createnewuser(username, email , password){
    Setuser.call(this , username); // by using .call and this we can call setuser function correctley.
     this.email = email;
    this.password = password;
}

const user2 = new createnewuser("neha" , "neha.com" , 233421);

console.log(user2);


