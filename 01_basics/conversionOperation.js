let score =  "33"

console.log(typeof score);
console.log(typeof (score));
 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1  ; false =>0

*/

let isLoggedIn = "anurag"
 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false 
// "" => false ; "anurag" => true 


//*******************************Operations*********************************

let value = 3
let negValue = -Value

//console.log(neGValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = " Anurag"
 
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(true);  // true
console.log(+true);  // 1
console.log(+"");    //0
