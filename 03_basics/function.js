function sayMyName(){
        console.log("a");
        console.log("n");
        console.log("u");
        console.log("r");
        console.log("a");
        console.log("g");
}

//sayMyName()  // anurag

function addTwoNumbers(num1,num2) {
        console.log(num1+num2);
}

function addTwoNumbers(num1,num2) {
        // let result = num1+num2
        // return result

        return num1 + num2
}

const result = addTwoNumbers(3,4) //  7

console.log("Result:",result); // Result: 7

function loginUserMessage (username = "sam") {  // kuchh nahi to sam hi
        if(!username){ // username na ho to 
                console.log("please enter a username");
                return 
        }
        return`${username} just logged in`

}

console.log(loginUserMessage("anurag")); // anurag just logged in
console.log(loginUserMessage()); // undefined just logged in


function calculateCartPrice(...num1) { // rest operator
        return num1
}
console.log(calculateCartPrice(200,400,500));  // [200,400,500]


const user = {
        username: "anurag",
        price: 199
}
 
function handleObject (anyObject){
        console.log(`username is ${anyObject.username}and price is${anyObject.price}`);
}

// handleObject(user)

handleObject({
        username:"sam",
        price:399
})
const myNewArray = [200,400,100,600]
function returnSecondValue(getArry){
        return getArry[1]
}

console.log(returnSecondValue(myNewArray)); //400

console.log(returnSecondValue([200,400,100,600])); //400
