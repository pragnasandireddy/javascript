class Savings_acc{
    deposits(){
        console.log("amount deposition is successful");
    }
    withdraw(){
        console.log("amount withdraw is successful");
    }

}
console.log(new Savings_acc( )) 
let c1=new Savings_acc( )
let c2=new Savings_acc( 101,"rahulgandhi",50000)// to initilize object values we need constructor
c1.deposits()
c1.withdraw()