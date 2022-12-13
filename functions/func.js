//function
function pragna(x,y){
return x+y/2
}
//other way to create function using fat arrow function
const sum = (x,y)=>{
    return x+y
}
let a=2;
let b=200;
console.log(pragna(a,b))
console.log("the average of x and y is",pragna(a,b))
console.log(sum(8,9))
console.log(sum(a,b))
