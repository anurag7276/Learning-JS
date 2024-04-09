// Stack (Primitive )  ,Heap (Non primitive)
// in stack we got a copy      in heap we got reference 
let myName = "Anurag singh"

let anotherName = anurag

 anotherName = "singh"

console.log(anotherName);
console.log(myName);

let userOne = {
        email: "user@.com" ,
        upi: "user@bl"
        
}

let userTwo = userOne

userTwo.email = "anurag@.com"

console.log(userOne.email);  // "anurag@.com"
console.log(userTwo.email);  // "anurag@.com"
