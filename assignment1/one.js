//wap to check a num dividible by 7 or not
var a=36 ;
if (a%7==0) {
    console.log("divisible by 7")
}
else {
    console.log("non divisible")
}

//wap a programm to check a num is multiple of 3 or not
var b=23;
b%3==0 ? console.log("multiple of 3") : console.log("not multiple")

//check num is positive or not 
var c=-1;
c>=1 ?console.log("its a positive ") : console.log("not positive")

//check num having 4 at the units place or not

let d=10000;
d.length==4 ? console.log("its 4 unit num") : console.log("not a 4 unit")



//check its a 3 digit num or not
var e=99
e>=100 && e<=999 ? console.log("its a 3 digit num ") : console.log("not a 3 digit num")

//to print even or odd for a num
var f=69
e/2==0 ? console.log("its an even num ") : console.log("its an odd num")

//to print greatest num in given two num
var g=[200,3000];
let asc=g.sort((a,b)=>a-b);
console.log(g[g.length-1])

//to print least num in given two num
var h=[200,3000];
let asce=h.sort((a,b)=>a-b);
console.log(h[0])


//to print greatest num in given 3 num
var j=[20,330,40]
let p=Math.max(...j)
console.log(p)

//to print least num in given 3 num
var y=[45,44,96,]
let k=Math.min(...y)
console.log(k)


//wap to print given 3 num in ascending order or not
let num=[2,59,23]
let ascending_order =num.sort((a,b) => a-b);
console.log(num)


//wap to print given 3 num in descending order or not
let numbers=[55,95,20,1,59]
let descending_order =numbers.sort((a,b) => b-a);
console.log(numbers)

//wap to print highest and lowest num in given num
let s=[9,33,6,77,85]
let x =s.sort((a,b) => a-b);
console.log(x[0], x[x.length-1])
