//executing same constructor in parent and child class with the help of super() to prevent constructor overriding
class Account{
   constructor(){
        console.log("parent class constructor")
    }
    emp_details(){
        console.log(101,"rahul",300000)
    }

}
class Savings_account extends Account{
   
    constructor(){
        super() //to invoke the parent class constructor
        console.log("child class constructor")
    }
}
let e1=new Savings_account()
console.log(e1)
e1.emp_details()
