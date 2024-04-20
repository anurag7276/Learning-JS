// Immediately Invoked Function Expressions (IIFE)

(function chai(){  // named IIFE
        console.log(`DB connected`);
}) () ;
 // (function)  (execution)

 ((name) =>{
        console.log(`DB connected ${name}`);
}) ('anurag') 
