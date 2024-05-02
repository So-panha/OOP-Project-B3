import { Ticket } from "./Booking/Ticket";
import { Passenger } from "./Booking/Passenger";

export class Trip {
    private tickets: Ticket[] = [];
    private passengers: Passenger[] = [];

    // Add ticket to the trip
    addTicket(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    // Add passenger to the trip
    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }
}