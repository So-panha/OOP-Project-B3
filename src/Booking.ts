import { Ticket } from "./Ticket";
import { Customer } from "./Customer";

export class Booking {
    private customer : Customer;
    constructor(private booking_reference: string,private booking_id: string) {
        this.booking_reference = booking_reference;
        this.booking_id = booking_id;
    }

    // Add customer
    addCustomer(customer : Customer){
        this.customer = customer;
    }
    // getTotalPrice(): number {
    //     return (
    //         this.departureTime.getHours() * 100 +
    //         this.departureTime.getMinutes() * 10 +
    //         this.departureTime.getSeconds()
    //     );
    // }

    // getBookingId(): string {
    //     return this.booking_id;
    // }

    // setBookingId(bookingId: string): void {
    //     this.booking_id = bookingId;
    // }

    // getTicket(): Ticket {
    //     return this.ticket;
    // }

    // setTicket(ticket: Ticket): void {
    //     this.ticket = ticket;
    // }
}