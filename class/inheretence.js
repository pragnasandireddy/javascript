//inheretence is used to reuse the functionality and add new functionality 
class Account{
    emp_details(){
        console.log(101,"rahul",300000)
    }
}
class Savings_account extends Account{
  Savings(){
    console.log("total savings are 5000000")
  }
}
let e1=new Savings_account()
console.log(e1)
e1.emp_details()
e1.Savings()