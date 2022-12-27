//how to iterate array-using for,do while,while,for of now we can do it using map
//map method -  iterate and prints ur array and execute your function(like adding ) as many as  legnth of array
//map method return new array
let siz=[33,34,35,36]
siz.map(()=>{
    console.log("hello,gm");// prints hello,gm 4 times
})
let size=[33,34,35,36]
size.map((hello,gm)=>{
    console.log(hello,gm);//prints whole array and index nymbers
})
let sizes=[33,34,35,36]
sizes.map((hello)=>{
    console.log(hello);//prints whole array
})