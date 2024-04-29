import { Airlines } from "./Airline";
import { Address } from "./Address";

export class Airports {
  private airline: Airlines[] = [];
  //   private airline: Airlines;
  constructor(private name: string,private address: Address) {}

  addAirline(airline: Airlines) {
    this.airline.push(airline);
  }

}
