import { Airlines } from "./Airline";
import { DepartureTime } from "./DepartureTimeFlight";
import { Ticket } from "../Booking/Ticket";
export class Flight {
    private airline: Airlines[] = [];
    private tickets: Ticket[] = [];
    constructor(private flight_number: string, private origin: string, private destination: string, private DepartureTime: DepartureTime) {
    }

    // Add airline to flight
    addAirline(airline: Airlines): void {
        this.airline.push(airline);
    }

    // Get flight 
    getFlightNumber():string {
        return this.flight_number;
    }

    // Add ticket
    addTicket(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    // Get all tickets
    getAllTickets(): Ticket[]{
        return this.tickets
    }
    
    
}