import { Airlines } from "./Airline";
import { Address } from "../Employees/Address";
import { Flight } from "./Flight";

export class Airports {
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

}
