function changecolor() {
    document.getElementById('change').style.backgroundColor = "green"

}
function changecolor1(){
    document.getElementById('color').style.backgroundColor="yellow"
}
function changecolor2(){
    document.getElementById('color1').style.backgroundColor="grey"
}
function changecolor3(){
    document.getElementById('color2').style.backgroundColor="orange"
}
function changecolor4(){
    document.getElementById('color3').style.backgroundColor="skyblue"
}
function changecase(){
    let name = document.getElementById('case').value
    //console.log(name)
    document.getElementById('case').value = name.toUpperCase();
}
    