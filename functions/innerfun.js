//function inside the function
function outer(){
    console.log("outer function");
    function inner(){
console.log("inner function")
    }
    inner()
    inner()
}
outer()
