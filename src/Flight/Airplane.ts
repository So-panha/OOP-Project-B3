import { Airlines } from "./Airline";
import { Seat } from "../Booking/Seat";

export class Airplane {
    private airline: Airlines[] = [];
    private seats: Seat[] = [];
    constructor(private airplaneName : string, private regesterName : string, private model : string){}

    //  Add airline to airplane
    addAirline(airline : Airlines) : void {
        this.airline.push(airline);
    }

    // seats
    addSeat(seat : Seat) : void {
        this.seats.push(seat);
    }
}