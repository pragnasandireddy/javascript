class Bank{ //class name is recomended to start with capital and it contains properties(variable) and methods(functions()) called class members
    min_balance=23000//properties only printed
    name="rahul" //property
    deposits(){} //method
    savings(){} //method
    get_withdraw(){ 
        console.log("amount withdraw is successful");
        console.log("your min_balance is : ", this.min_balance)
    } //method
    //as soon as objects crested memory location allocated for them
}
console.log(new Bank());//prints object contents
console.log(new Bank());
console.log(new Bank());
new Bank().get_withdraw();

let c1= new Bank() //other way to print object
console.log(c1)
c1.get_withdraw()//prints the console data
c1.deposits()//blank
c1.savings()//blank 

let c2= new Bank() 
console.log(c2.min_balance)

let c3= new Bank() 
console.log(c3.name)
//c1,c2,c3 are reference variable or reference object