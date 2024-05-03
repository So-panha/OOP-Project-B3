import { Airlines } from "./Airline";
import { Address } from "../Employees/Address";
import { Flight } from "./Flight";
import { Booking } from "../Booking/Booking";
import { Baggage } from "./Baggage";
import { Passenger } from "../Passenger/Passenger";
import { Gate } from "../Booking/Gate";

export class Airports {
  private airline: Airlines[] = [];
  private flights: Flight[] = [];
  private bookings: Booking[] = [];
  private gates: Gate[] = [];
  //   private airline: Airlines;
  constructor(private name: string, private address: Address) {}

  // Add airline
  addAirline(airline: Airlines): void {
    this.airline.push(airline);
  }

  // Add flight
  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  // Add booking
  addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  // Add gate
  addGate(gate: Gate): void {
    this.gates.push(gate);
  }

  // Get details information of flight from booking reference
  getDetailInfor(booking_reference: string): (Flight | Baggage | Passenger)[] {
    const bookInfor: (Flight | Baggage | Passenger)[] = [];
    const flights: Flight[] = [];
    this.bookings.forEach((booking) => {
      if (booking.getBookingReference() === booking_reference) {
        const tickets = booking.getTrip().getTickets();
        const passengers = booking.getTrip().getPassengers();
        const baggages = booking.getTrip().getBaggages();

        tickets.forEach((ticket) => {
          flights.push(ticket.getFlight());
        });

        bookInfor.push(...flights, ...baggages, ...passengers);
      }
    });
    return bookInfor;
  }
}
