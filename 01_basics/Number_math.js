const score = 400
console.log(score); // 400

const balance = new Number (100)
console.log(balance);//[Number:100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//*************************Maths*******************************

   console.log(Math);  //object
   console.log(Math.abs(-4));  // 4
   console.log(Math.round(4.6));  //  5
   console.log(Math.ceil(4.6));  //  5
   console.log(Math.floor(4.6));  //  4
   console.log(Math.min(4,3,6,8));  //  3
   console.log(Math.max(4,7,6,9));  //  9


   console.log(Math.random()); //lies btw 0 to 1 
   console.log((Math.random()*10) + 1); //lies btw 1 to 9... to avoid 0 we can add 1
     
   const min = 10
   const max = 20


   console.log(Math.floor(Math.random()*(max-min+1))+min);

