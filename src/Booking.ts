import { Ticket } from "./Ticket";
import { Customer } from "./Customer";
import { Flight } from "./Flight";
import { Passenger } from "./Passenger";

export class Booking {
    private customer : Customer;
    private passenger : Passenger[] = [];
    constructor(private booking_reference: string, private booking_id: string, private destination_to: Flight[] = [], private destination_return: Flight[] = []) {
        this.booking_reference = booking_reference;
        this.booking_id = booking_id;
        this.destination_to = destination_to;
        this.destination_return = destination_return;
    }

    // Add customer
    addCustomer(customer : Customer){
        this.customer = customer;
    }

    // Add passenger
    addPassenger(passenger: Passenger){
        this.passenger.push(passenger);
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
