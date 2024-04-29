import { Ticket } from "./Ticket";

export class Booking {
    private booking_reference: string;
    private booking_id: string;
    private departureAirport: string;
    private destinationAirport: string;
    private departureTime: Date;
    private ticket: Ticket;

    constructor(
        booking_reference: string,
        booking_id: string,
        departureAirport: string,
        destinationAirport: string,
        departureTime: Date,
        ticket: Ticket
    ) {
        this.booking_reference = booking_reference;
        this.booking_id = booking_id;
        this.departureAirport = departureAirport;
        this.destinationAirport = destinationAirport;
        this.departureTime = departureTime;
        this.ticket = ticket;
    }

    getTotalPrice(): number {
        return (
            this.departureTime.getHours() * 100 +
            this.departureTime.getMinutes() * 10 +
            this.departureTime.getSeconds()
        );
    }

    getBookingId(): string {
        return this.booking_id;
    }

    setBookingId(bookingId: string): void {
        this.booking_id = bookingId;
    }

    getTicket(): Ticket {
        return this.ticket;
    }

    setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }
}