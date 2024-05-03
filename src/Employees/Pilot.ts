import { Address } from "./Address";
import { Employee } from "./Employee";

export class Pilot extends Employee {
    private pilot_id: string;
    private aircraft_type: string;
    constructor(
        pilot_id: string,
        aircraft_type: string,
        salary: number,
        experience: number,
        firstName: string,
        lastName: string,
        age: number,
        gender: string,
        email: string,
        tel: string,
        address: Address
    ) {
        super(
            salary,
            experience,
            firstName,
            lastName,
            age,
            gender,
            email,
            tel,
            address
        );
        this.pilot_id = pilot_id;
        this.aircraft_type = aircraft_type;
    }
    // Get salary
    getSalary(): number {
        return this.salary;
    }

    // Get pilot id
    getId(): string{
        return this.pilot_id;
      }
    
}
