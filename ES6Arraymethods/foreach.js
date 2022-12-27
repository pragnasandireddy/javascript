 //for each also iterates array and execute function @array.length but dont return new array
  let marks=[23,24,25,26]
   marks.forEach((hello)=>{
    console.log(hello)
   })

   //for each cant return new array and gives undefined
   let term_marks=[23,24,25,26]
   let results=term_marks.forEach((hello)=>{
     return hello+2
   })
   console.log(results)//undefines 