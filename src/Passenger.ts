import { Booking } from "./Booking";
import { Airlines } from "./Airline";

export class Passenger{
    private passenger_id: string;
    private airline: Airlines[] = [];
    private booking: Booking[] = [];
    constructor(passenger_id: string){
        this.passenger_id = passenger_id;
    }
    getPassengerId(): string{
        return this.passenger_id;
    }
}