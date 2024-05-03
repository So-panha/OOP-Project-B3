import { Airlines } from "./Airline";
import { DepartureDate } from "./DepartureDateFlight";
import { Ticket } from "../Booking/Ticket";
import { Pilot } from "../Employees/Pilot";
import { CoPilot } from "../Employees/CoPilot";
import { Attendant } from "../Employees/Attendant";

export class Flight {
  private airline: Airlines[] = [];
  private tickets: Ticket[] = [];
  private pilot : Pilot;
  private coPilot : CoPilot;
  private attendant : Attendant;
  constructor(
    private flight_number: string,
    private origin: string,
    private destination: string,
    private DepartureTime: DepartureDate,
  ) {}

  // Add airline to flight
  addAirline(airline: Airlines): void {
    this.airline.push(airline);
  }

  // Get flight
  getFlightNumber(): string {
    return this.flight_number;
  }

  // Add ticket
  addTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
  }

  // Get all tickets
  getAllTickets(): Ticket[] {
    return this.tickets;
  }

  // Adds pilot to flight
  addPilot(pilot: Pilot): void {
    this.pilot = pilot;
  }

  // Adds coPilot to flight
  addCoPilot(coPilot: CoPilot): void {
    this.coPilot = coPilot;
  }

  // Adds attendant to flight
  addAttendant(attendant: Attendant): void {
    this.attendant = attendant;
  }

  // Get date
  getDepartureTime(): DepartureDate {
    return this.DepartureTime;
  }

  //   Get pilot
  getPilot(): Pilot {
    return this.pilot;
  }
}
