//spread operator in object doesnt allow duplicates like array
let user={id:101,name:"rahul",email:"rahul@gmail.com"}
let details={email:"rahul@22gamil.com",sal:40000}
let user_details={...user,...details,location:"banglore"}
console.log(user_details)  