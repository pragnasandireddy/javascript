const Address = require("./bank.js")
class CC_details {
        constructor(cc_id,cc_name,address){
            this.cc_id=cc_id;
            this.cc_name=cc_name;
            this.address=address;

        }

}
let c1=new CC_details(101,"rahul",new Address(932,"marathalli","bangalore","karnataka"));
console.log(c1)