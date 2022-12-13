let emp={
    id :100,
    name :"Pragna" ,
    sal : 30000
}
console.log(emp)
console.log(emp.id)
console.log(emp.name)
console.log(emp.loc) //undefined

//******** */
for (key in emp){
    console.log(key) //only keys will come
}

/*** */

for (key in emp){
    console.log(emp[key]) //values will come
}
