import { Person } from './Person';

export class Customer extends Person {
  private customer_id: string;

  constructor(customer_id: string,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    address: string,
    phone: string,
    email: string) {
    super(firstName, lastName, age, gender, address);
    this.customer_id = customer_id;
  }
}
