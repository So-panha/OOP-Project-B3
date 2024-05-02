import { Address } from "./Address";
import { Booking } from "./Booking";
import { Person } from "./Person";
import { Baggage } from "./Baggage";

export class Passenger extends Person {
    private passenger_id: string;
    private baggage : Baggage[] = []
    private booking: Booking[] = [];
    constructor(passenger_id: string, firstName: string, lastName: string, age: number, gender: string, email: string, tel: string, address: Address){
        super(firstName, lastName, age, gender, email, tel, address);
        this.passenger_id = passenger_id;
    }
    // get passenger id
    getPassengerId(): string{
        return this.passenger_id;
    }
    // add booking
    addBooking(booking: Booking){
        this.booking.push(booking);
    }
    // add baggage
    addBaggage(baggage: Baggage){
        this.baggage.push(baggage);
    }
}