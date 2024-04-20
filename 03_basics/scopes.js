if(true){
        let a = 10
        const b= 20
        var c= 30

}

console.log(a); // not accesable
console.log(b);  // not accesable
console.log(c); // 30

function one(){
        const username = "anurag"

        function two(){
                const website = "youtube"
                console.log(username); // accesable
        }
       // console.log(website); //not accesable  error

        two() // anurag
}
one()



if (true){
        const username = "anurag"
        if(username === "anurag"){
                const website = "  youtube"
                console.log(username + website); // anurag  youtube
        }
        console.log(website); //error
}
console.log(username);//error



// ++++++++++++++++interesting++++++++++++++++++++


addone(5)

function addone (num){
        return num+1

}
addone(5)


addTwo(5)// error 

const addTwo = function(num){
        return num+2
}
addone(5)
