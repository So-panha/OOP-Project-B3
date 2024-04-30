import { Person } from './Person';
import { Address } from './Address';

export class Customer extends Person {
  constructor(private customer_id: string, firstName: string, lastName: string, age: number, gender: string, email: string, tel: string, address: Address) {
    super(firstName, lastName, age, gender, email, tel, address);
    this.customer_id = customer_id;
    this.address = address;
  }
}