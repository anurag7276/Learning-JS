// Date

let myDate = new Date()
console.log(myDate.toString());  
console.log(myDate.toDateString());  
console.log(typeof myDate);  // Object


let myCreatedDate = new Date(2024, 0, 24)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2024-01-24")

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());

console.log(Math.floor(Date.now()/1000));  //to convert milisec to sec divede by 1000


let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMont());

newDate.toLocaleString('default',{
        weekday: "long"

})
