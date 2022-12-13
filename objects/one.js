//check object is empty or not

let emp={
    id: 101,
    name :"pragna",
    sal :30000,
    loc : "banglore",
}
console.log(Object.keys(emp));  //capital O
console.log(Object.values(emp));
console.log(Object.entries(emp))
Object.keys(emp).length==0 ? console.log("empty object") : console.log("not empty");