//2types of super keyword execution
class Govt{
    constructor(hno,area,city,state){
        console.log("address constructor")
        this.hno=hno;
        this.area=area;
        this.city=city;
        this.state=state;
    }
    get_tax(){
        console.log("10cr")
    }

}
class KA extends Govt{
    constructor(id,hno,area,city,state){
        super(hno,area,city,state)//type 1
        console.log("Savings_account constructor")
        this.id=id;
        
    }

    
    get_total_tax(){
        super.get_tax()//type 2 
    }
    get_amount(){
        console.log("15cr")
    }
}
let c1=new KA(101,93,"marathali","banglore","karnataka" )
c1.get_total_tax()
c1.get_amount()
console.log(c1)