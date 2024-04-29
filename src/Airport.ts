import { Airlines } from "./Airline";
import { Address } from "./Address";
import { Flight } from "./Flight";
import { SearchFlight } from "./search_flight";

export class Airports {
  private searchFlights:  SearchFlight;
  private airline: Airlines[] = [];
  private flights: Flight[] = [];
  //   private airline: Airlines;
  constructor(private name: string,private address: Address) {}

  // Add airline
  addAirline(airline: Airlines): void {
    this.airline.push(airline);
  }

  // Add flight
  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  // Get all flighs
  getFlights(): Flight[] {
    return this.flights;
  }

}
