//to invoke parent class constructor parameters in child class constructor
class Account{
    savings=100000;
   constructor(id,name){
        this.id=id;
        this.name=name;
        console.log("parent class constructor")
    }

}
class Savings_account extends Account{
    min_bal=10000
    //reausing the existing functionality>
    constructor(id,name,sal){
        super(id,name) //to invoke the parent class constructor parameters 
        this.sal=sal;
        console.log("child class constructor")
    }
    //adding the new functionality>
    get_bal(){
         return this.sal-this.min_bal 
    }
}
let e1=new Savings_account(101,"rahul",30000)
console.log(e1)
console.log(e1.get_bal())

class current_account extends Account{
            min_bal=20000;
        constructor( id,name,sal){
            super(id,name,);
            this.salary=sal
        }
       
}
console.log(new current_account(102,"sonia",50000))

