//check object is empty or not

let emp={
    id: 101,
    name :"pragna",
    sal :30000,
    loc : "banglore",
}
console.log(Object.keys(emp));  //only properties or keys
console.log(Object.values(emp));//only variables or values
console.log(Object.entries(emp)) //whole obj
Object.keys(emp).length==0 ? console.log("empty object") : console.log("not empty");