import { Address } from "./Address";
import { Employee } from "./Employee";

export class Pilot extends Employee {
    private pilot_id: string;
    private aircraft_type: string;
    constructor( pilot_id: string, aircraft_type: string,protected salary : number,protected experience:number, firstName: string, lastName: string, age: number, gender: string, email: string, tel: string, address: Address) {
        super(salary, experience, firstName, lastName, age, gender, email, tel, address);
        this.pilot_id = pilot_id;
        this.aircraft_type = aircraft_type;
        
    }
    getSalary(): number {
        throw new Error("Method not implemented.");
    }
}