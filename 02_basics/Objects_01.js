// singleton 
// object literals

// object literals

const mySym = Symbol("key1")

const JsUser = {
        name :"anurag",
        "full name" :"Anurag Singh",
        [mySym]:"mykey1",
        age: 18,
        location:"lucknow",
        email:"anurag@gmail.com",
        isLoggedIn:false,
        lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email); // 1st method
console.log(JsUser["email"]); // 2nd method
//console.log(JsUser."full name"); // it generate error 
console.log(JsUser["full name"]); // to resolve error use square bracket method
console.log(JsUser[mySym]); // symbol used in this sytax

JsUser.email = "anurag@singhgmail.com"
//Object.freeze(JsUser)
JsUser.email = "anurag@googlegmail.com"

console.log(JsUser); //in email: "anurag@singhgmail.com"

JsUser.greeting = function(){
        console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
        console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello Js user
console.log(JsUser.greetingTwo());//  Hello Js user, anurag

