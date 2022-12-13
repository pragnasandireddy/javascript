function greet(){
    console.log(this);//will get huge obj data
}
greet();

console.log("----------")

let wish=()=>{
    console.log(this);// {} will get empty object coz "this" keyword points current object
}
wish()