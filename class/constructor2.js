class Employee_details{
    constructor(a,b,c){
        console.log("constructor is executed")
        this.emp_id =a;// this() is a pointer refering to current object
        this.emp_name=b;
        this.emp_sal=c
    }
    get_emp_details(){
        console.log(`Employee Details - employee id: ${this.emp_id} , name: ${this.emp_name} and salary: ${this.emp_sal}`)
    }

}
let e1=new Employee_details(101,"rahul",200000)
let e2=new Employee_details(102,"sonia",300000)
console.log(e1)
console.log(e2)
e1.get_emp_details()