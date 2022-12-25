function hasPosNeg(array){
 let hasPos=false
 let hasNeg=false
array.forEach(num => {
    hasPos=num>0
  hasNeg=num<0
})
return [hasPOs, hasNeg]}