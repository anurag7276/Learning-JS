const accId = 18399
let  accEmail = "anurag@gmail.com"
var  accPassword = "12342"
accCity = "lucknow"   //you can do  but not good practise   in js semicolon does not matter
 let accState ;

// accId  =2  not allowed

accEmail = "anuragsingh@gmil.com"
accPassword = "53738"
accCity = "Gahmar"

console.log(accId);

/*
prefer not to use var
 because of issue in block scope and functional scope
 */

console.table([accEmail,accPassword,accCity,accState])