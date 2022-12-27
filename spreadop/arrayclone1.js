//updating of both new and current array
let size=[27,30,32,34]
let new_size=size
size[0]=28
console.log(size)
console.log(new_size)

//only upjating current array
let siz=[27,30,32,34]
let new_sizes=[]
    for(x of siz){
        new_sizes.push(x)
    }
    siz[0]=28
console.log(siz)
console.log(new_sizes)

//spread operator - extract and copy
//we can use it for arrays and objects
let sizes=[27,30,32,34]
let sizess=[...sizes] 
    sizes[0]=28
console.log(sizes)
console.log(sizess)