// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


console.log("2" > 1);  //true
console.log("02" > 1);  // true


console.log(null > 0);  //false
console.log(null == 0 ); //false
console.log(null >=0 ); //true

// the reason is that an equality check == and comparisons > >= <= work differently
//  Comparisons convert null to a number ,treating it as 0 
//  that's why null>= o is true and null > 0 is false

// === also check data types 
