class Govt{
    tax=10
    get_tax(){
        console.log("discount at central")
    }

}
class KA extends Govt{

    //tax=5 //this overrides tax=10
    tax1=15//if the variable name is different then both will printed as it over comes overriding
    get_tax(){
        console.log("discount at karnataka") // overrides
    }
}
let c1=new KA()
console.log(c1);
console.log(c1.tax)
c1.get_tax()