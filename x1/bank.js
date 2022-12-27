//export Address class to cc.js
class Address{

    constructor(hno,area,city,state){
        console.log("address constructor")
        this.hno=hno;
        this.area=area;
        this.city=city;
        this.state=state;
    }
    withdraw(){}
}
class Savings_account{
    constructor(id,name,amount,address){
        console.log("Savings_account constructor")
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.address=address;
    }

}
let a1=new Savings_account(101,"rahul",30000,new Address(932,"marathalli","bangalore","karnataka"))
console.log(a1)
 module.exports =Address;