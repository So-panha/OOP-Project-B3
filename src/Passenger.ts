import { Address } from "./Address";
import { Booking } from "./Booking";
import { Person } from "./Person";

export class Passenger extends Person {
    private passenger_id: string;
    private booking: Booking[] = [];
    constructor(passenger_id: string, firstName: string, lastName: string, age: number, gender: string, email: string, tel: string, address: Address){
        super(firstName, lastName, age, gender, email, tel, address);
        this.passenger_id = passenger_id;
    }
    getPassengerId(): string{
        return this.passenger_id;
    }

    addBooking(booking: Booking){
        this.booking.push(booking);
    }
}