export abstract class Person {
    protected firstName: string;
    protected lastName: string;
    protected age: number;
    protected gender: string;
    protected address: string;
    protected phone: string;
    protected email: string;
    constructor(firstName: string, lastName: string, age: number, gender: string, address: string, phone: string, email:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}