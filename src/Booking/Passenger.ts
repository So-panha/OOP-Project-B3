import { Person } from "../Person";
import { Address } from "../Employees/Address";
// import { Baggage } from "../Flight/Baggage";

export class Passenger extends Person {
  
    // private baggages : Baggage[] = [];
    constructor(private passenger_id: string, first_name : string, last_name : string, age : number, gender: string, email : string, tel : string, address: Address) {
        super(first_name, last_name, age, gender, email, tel, address);
        this.passenger_id = passenger_id;
    }

    // // Add baggages to the passenger
    // addBaggage(baggage: Baggage) {
    //     this.baggages.push(baggage);
    // }

    // // Get all baggages
    // getBaggages(): Baggage[] {
    //     return this.baggages;
    // }
}