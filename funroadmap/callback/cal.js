 let cal=(a,b,operation)=>{
    let result=""
    if(operation=="sum"){
        result= a+b;
    }
    if(operation=="multi"){
        result= a*b;
    }
    return result;
 }
 let output=cal(10,20,"sum");
 console.log(output)
 let output2=cal(10,20,"multi");
 console.log(output2)