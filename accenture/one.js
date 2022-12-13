for(let i=0;i<100;){
let a=(++i%3?"":"fizz")
let b=(i%5?"":"buzz")
let c=a+b
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(c||i); 

}
