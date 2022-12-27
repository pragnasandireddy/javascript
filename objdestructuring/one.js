//object destructuring is to read object property as variable name
//we do this based on requiment
//increase readibility

let emp={id:101,name:"rahul",email:"rahul@gmail.com",loc:["banhlore,hyd,delhi"]}
let area="bangloew"
let {id,name,email,loc}=emp
console.log(id)
console.log(name)
console.log(email)
console.log(loc)
console.log(area)
console.log(emp.id)//insread of these steps we can do in single step 