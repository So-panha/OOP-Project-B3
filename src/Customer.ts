import { Person } from "./Person";

export class Customer extends Person {
    private customerId : number;
    constructor(customerId : number, first_name : string, last_name : string, age : number, email : string, tel : string) {
        super(first_name,last_name, age,email,tel);
        this.customerId = customerId;
    } 
    
}                 

