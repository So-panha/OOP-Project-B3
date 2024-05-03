import { Person } from "../Passenger/Person";
import { Address } from "./Address";
export abstract class Employee extends Person {
    constructor(protected salary : number,protected experience:number, firstName: string, lastName: string, age: number, gender: string, email: string, tel: string, address: Address ){
        super(firstName, lastName, age, gender, email, tel, address);
    }
    abstract getSalary(): number;
    abstract getId(): string;
}