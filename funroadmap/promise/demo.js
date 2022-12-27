let dotask=(success,failure)=>{

    let flag=true;
    if(flag==true){
        success("data entered successful")
    }
    else{
        failure("not successful")
    }
}
dotask((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})