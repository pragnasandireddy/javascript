const names=['john','jack','rose','daniel','John','Rose']

function removeduplicate(arr){
    let newnames='';
    for(let i=0;i<arr.length ; i++){
        if(newnames.includes(arr[i].toLowerCase()==-1))
        newnames.push((arr[i].toLowerCase()));
    }
    return newnames;

}
console.log(removeduplicate(names));