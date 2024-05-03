import { Ticket } from "./Booking/Ticket";
import { Passenger } from "./Booking/Passenger";
import { Baggage } from "./Flight/Baggage";
import { DepartureDate } from "./Flight/DepartureDateFlight";
import { Gate } from "./Gate";

export class Trip {
  private tickets: Ticket[] = [];
  private passengers: Passenger[] = [];
  private baggages: Baggage[] = [];

  // Add ticket to the trip
  addTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
  }

  // Add passenger to the trip
  addPassenger(passenger: Passenger): void {
    this.passengers.push(passenger);
  }

  // Get tickets
  getTickets(): Ticket[] {
    return this.tickets;
  }

  // Get passengers
  getPassengers(): Passenger[] {
    return this.passengers;
  }

  // Add baggages to the trip
  addBaggage(baggage: Baggage) {
    this.baggages.push(baggage);
  } 

  // Get baggages
  getBaggages(): Baggage[] {
    return this.baggages;
  }

  // Get gate
  getGateNumber(flight_Number:string, date:DepartureDate):string {
    let gateNumber = "";
    this.tickets.forEach((ticket) => {
      if (
        ticket.getFlight().getFlightNumber() === flight_Number &&
        ticket.getFlight().getDepartureTime().getDepartureDateStart() === date.getDepartureDateStart() &&
        ticket.getFlight().getDepartureTime().getDepartureDateEnd() === date.getDepartureDateEnd()
      ) {
        gateNumber = ticket.getGate().getNameGate();
        return gateNumber; // Return the gateNumber when a match is found
      }
    });
    return gateNumber; // Return the gateNumber even if it's an empty string
  }
}
