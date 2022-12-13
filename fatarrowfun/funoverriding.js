//function over-riding bcz odf same function name
function msg(){
    console.log("gm")
}
msg()


function msg(){
    console.log("gn tc")
}
msg()

//ove-riging solved by fat arrow function

var wish=()=>{
    console.log("gm")
}
wish()


var wish=()=>{
    console.log("gn tc")
}
wish()