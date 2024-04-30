import { Ticket } from "./Ticket";
import { SearchFlight } from "./search_flight";

export class Booking {
  private flight: SearchFlight[] = [];
  constructor(
    private booking_reference: string,
    private booking_id: string,
    private ticket: Ticket
  ) {
    this.booking_reference = booking_reference;
    this.booking_id = booking_id;
    this.ticket = ticket;
  }
  //  BOoking
  addflight(flight: SearchFlight): void{
    this.flight.push(flight);
  }
  //   }

  //   getTotalPrice(): number {
  //     return (
  //       this.departureTime.getHours() * 100 +
  //       this.departureTime.getMinutes() * 10 +
  //       this.departureTime.getSeconds()
  //     );
  //   }

  //   getBookingId(): string {
  //     return this.booking_id;
  //   }

  //   setBookingId(bookingId: string): void {
  //     this.booking_id = bookingId;
  //   }

  //   getTicket(): Ticket {
  //     return this.ticket;
  //   }

  //   setTicket(ticket: Ticket): void {
  //     this.ticket = ticket;
  //   }
}
