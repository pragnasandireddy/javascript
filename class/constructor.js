//constructor will execute automatically at the timr of object creation 
//We cant invoke constructor method explicitly(express directly)
class Savings_acc{
    constructor(){
        console.log("constructor executing automatically");
    }
    deposits(){
        console.log("amount deposition is successful");
    }
    withdraw(){
        console.log("amount withdraw is successful");
    }

}
console.log(new Savings_acc( )) 
//let c1=new Savings_acc( ) //prints constructor bcz the object been created
//c1.constructor()  //We cant invoke constructor method explicitly(express directly)
//c1.deposits()
//c1.withdraw()
let c2=new Savings_acc(101,"rahulgandhi",50000)// to initilize object values we need constructor
console.log(c2)
