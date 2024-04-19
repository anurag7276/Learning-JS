const user = {
        username:"anurag",
        price:999,

        welcomeMessage: function(){
                console.log(`${this.username} , welcome to websites`);

        }
}
  //  this current variable ya context ki baat karta hai       global object hai this
user.welcomeMessage() // anurag ,welcome to website
user.username = "sam"
user.welcomeMessage() // sam,welcome to website


function chai(){
        let username = "anurag"
        console.log(this.username);  // undefined
}
 chai()


 
 const chai  =function(){ 
        let username = "anurag"
        console.log(this.username);  // undefined
}

 
 const chai  = () => { 
        let username = "anurag"
        console.log(this.username);  // undefined
}



const addTwo = (num1,num2) => {
        return num1 + num2  // explicit return
}


const addTwo = (num1,num2) =>   num1 + num2
 // or
const addTwo = (num1,num2) =>  ( num1 + num2) // return do not need   implicit return


console.log(addTwo(3,4));  //  7


