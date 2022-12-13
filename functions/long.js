let languages= ["c++","java","python","ruby","javascript"];
function longestword(arr){
 let result='';
 for(let currentitem of arr){
    if(currentitem.length>result.length)
    result=currentitem;
 }

    return result;

}
console.log(longestword(languages))