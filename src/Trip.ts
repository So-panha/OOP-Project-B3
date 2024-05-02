import { Ticket } from "./Booking/Ticket";
import { Passenger } from "./Booking/Passenger";
import { Baggage } from "./Flight/Baggage";

export class Trip {
    private tickets: Ticket[] = [];
    private passengers: Passenger[] = [];
    private baggages: Baggage[] = [];

    // Add ticket to the trip
    addTicket(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    // Add passenger to the trip
    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }

    // Get tickets
    getTickets(): Ticket[]{
        return this.tickets;
    }

    // Get passengers
    getPassengers(): Passenger[]{
        return this.passengers;
    }

    // Add baggages to the trip
    addBaggage(baggage: Baggage) {
        this.baggages.push(baggage);
    }

    // Get baggages
    getBaggages(): Baggage[] {
        return this.baggages;
    }
}