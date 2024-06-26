import { Address } from "./Address";
import { Employee } from "./Employee";

export class Attendant extends Employee {
  private attendant_id: string;
  private department: string;
  private language_skills: string;
  private seniority: string;
  coPilot_id: string;

  constructor(
    attendant_id: string,
    department: string,
    language_skills: string,
    seniority: string,
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
    this.attendant_id = attendant_id;
    this.department = department;
    this.language_skills = language_skills;
    this.seniority = seniority;
  }
  // Get salary
  getSalary(): number {
    return this.salary;
  }
  // get id attendant
  getId(): string{
    return this.attendant_id;
  }
}
