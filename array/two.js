let emp=["priya","pragna","lakshmi","deep"]
console.log(emp.length)
for(var i=0;i<=3;i=i+1)
{
console.log(emp[i])
}
//case where array length is undefined
for(var x=0;x<=emp.length-1;x=x+1)
{
    console.log(emp[x])
}
// for( 0f)
for(emp of emp){
    console.log(emp)
}