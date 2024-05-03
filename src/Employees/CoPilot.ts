import { Address } from './Address';
import { Employee } from './Employee';


export class CoPilot extends Employee {
   
  private coPilot_id: string;
  protected experience: number;
  private rankings: string;
  private licenses_number: string;
  private training_record: string;
    first_name: any;
    last_name: any;

  constructor(coPilot_id: string, experience: number, rankings: string,
    licenses_number: string, training_record: string, salary : number, firstName: string, lastName: string, age: number, gender: string, email: string, tel: string, address: Address ) {
    super(salary, experience, firstName, lastName, age, gender, email, tel, address);
    this.coPilot_id = coPilot_id;
    this.experience = experience;
    this.rankings = rankings;
    this.licenses_number = licenses_number;
    this.training_record = training_record;
  }

  // Get full name 
  getFullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  // Get salary 
  getSalary(): number {
    return this.salary
  }   

  // Get id 
     getId(): string{
    return this.coPilot_id;
  }
}