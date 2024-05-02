import { Airlines } from "./Airline";
import { Address } from "./Address";
import { Flight } from "./Flight";
import { SearchFlight } from "./search_flight";
import { Booking } from "./Booking";

export class Airports {
  private bookings: Booking[] = [];
  private search_flight?: SearchFlight[] = [];
  private airline: Airlines[] = [];
  private flights: Flight[] = [];
  //   private airline: Airlines;
  constructor(private name: string, private address: Address) { }

  // Add airline
  addAirline(airline: Airlines): void {
    this.airline.push(airline);
  }

  // Add flight
  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  // Add search
  addSearch(search: SearchFlight): void {
    this.search_flight?.push(search);
  }

  // Get all flighs
  getFlights(): Flight[] {
    const result: Flight[] = [];
    this.flights.forEach(flight => {
      this.search_flight?.forEach(search => {
        if (flight.getFlight() === search.getKeySearches()) {
          result.push(flight);
        }
      });
    });
    return result;
  }

  // Add booking in to airport
  addbooking(booking : Booking){
    this.bookings.push(booking);
  }

  // Get details from booking information
  getDetailBookings(booking_reference: string): Booking[] {
    const result: Booking[] = [];
    this.bookings.forEach(booking => {
      if (booking.getBookingReference() === booking_reference) {
        result.push(booking);
      }
    });
    return result;
  }
}
