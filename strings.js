const name= "Anurag"
const repo= 5

console.log(name + repo + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repo} `);

const gameName = new String('hitesh-hc')
 

console.log(gameName[0]);
console.log(gameName.__proto__); 

console.log(gameName.length);
console.log(gameName.toUpperCase());  
console.log(gameName.charAt(2));  
console.log(gameName.indexOf('u'));  

const newString = gameName.substring(0,4) //4 does not included
 console.log(newString);

 const anotherString = gameName.slice(-8,4)
 console.log(anotherString);

 const newStringOne = "     hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('20', '-'));

console.log(url.includes('hitesh')); //true
console.log(url.includes('sundar')); //false

console.log(gameName.split('-'));
