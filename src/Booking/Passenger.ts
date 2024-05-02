import { Person } from "../Person";
import { Address } from "../Employees/Address";

export class Passenger extends Person {
    constructor(private passenger_id: string, first_name : string, last_name : string, age : number, gender: string, email : string, tel : string, address: Address) {
        super(first_name, last_name, age, gender, email, tel, address);
        this.passenger_id = passenger_id;
    }
}