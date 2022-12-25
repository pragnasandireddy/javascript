// to initilize object values we need constructor
class Savings_acc{
    acc_id;
    //name;
    Min_balance;
    with_draw=12000;
    constructor(a,b,c){
       this.acc_id=a
       this.name=b
       this.Min_balance=c
    }
   
}
let c1=new Savings_acc(101,"sonia",30000 ) 
let c2=new Savings_acc(102,"rahulgandhi",50000)
console.log(c1)
console.log(c2)
