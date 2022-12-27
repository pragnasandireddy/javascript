//callback is used to passing a function as an argument
let sum=(a,b)=>{
    return a+b
 }
 let multi=(a,b)=>{
    return a*b
 }
 let calculate=(a,b,callback)=>{
    return callback(a,b)
    //business logic here
 }
 let result=calculate(10,20,sum)//calling function by passing argument
 console.log(result)
 let result2=calculate(10,20,multi)
 console.log(result2)