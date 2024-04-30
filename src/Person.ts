import { Address } from "./Address";

export abstract class Person {
    constructor(protected first_name : string, protected last_name : string, protected age : number,protected gender: string, protected email : string, protected tel : string, protected address: Address){}
}