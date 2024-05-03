import { Address } from "../Employees/Address";
import { Airports } from "./Airport";
import { Airplane } from "./Airplane";
import { Flight } from "./Flight";

export class Airlines {
    // private route : string;
    // private employees : string;
    private flights : Flight[] = [];
    private airplanes : Airplane[] = []; 
    private airport : Airports[] = [];
    constructor(private airlineName : string, private airlineCode : string, private airlineTel : string, private airlineEmail : string, private address: Address){}

    // Add airports to airline
    addAirport(airport: Airports) {
        this.airport.push(airport);
    }

    // Add airplane to airline
    addAirplane(airplane: Airplane) {
        this.airplanes.push(airplane);
    }

    // Add flight to airline
    addFlight(flight: Flight) {
        this.flights.push(flight);
    }

    // Get flight
    getCheckTicket(flight_number : string): Flight[] {
        this.flights.forEach(flight => {
            if(flight.getFlightNumber() === flight_number){
                const allTicket = flight.getAllTickets();
                allTicket.forEach(ticket => {
                    if(ticket.getTypeTicket() === "round_trip"){
                        console.log(ticket.getPassenger());
                    }
                });
            }
        });
        return this.flights;
    }

}                