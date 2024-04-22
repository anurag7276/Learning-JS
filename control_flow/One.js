// if

//const isUserloggedIn =true

if(isUserloggedIn){

        console.log("executed");
}
// < , > , <= ,>= , != ,!== ,== ,===

const score = 200

if(score > 100){
        let power = "fly"
        console.log(`User power :${power}`);  // run
}
console.log(`User power :${power}`);  // error


const UserloggedIn =true
const debitCart = true

if(UserloggedIn && debitCart  && 2==2){
        console.log("allow to buy course");  // all true then run

}
const debitCart = true

if(UserloggedIn || debitCart  || 2==2){
        console.log("allow to buy course");  // any true then run

}
