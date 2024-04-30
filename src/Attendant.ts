import { Person } from './Person';

export class Attendant extends Person {
  private attendant_id: string;
  private department: string;
  private language_skills: string;
  private seniority: string;

  constructor(attendant_id: string, department: string, language_skills: string, 
    seniority: string,firstName: string, lastName: string, age: number,
    gender: string, address: string, phone: string, email:string) {
    super(firstName, lastName, age, gender, address, phone, email); 
    this.attendant_id = attendant_id;
    this.department = department;
    this.language_skills = language_skills;
    this.seniority = seniority;
  }
}