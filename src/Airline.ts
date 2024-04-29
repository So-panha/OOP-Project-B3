import { Address } from "./Address";
import { Airports } from "./Airport";
import { Airplane } from "./Airplane";
import { Flight } from "./Flight";

export class Airlines {
    // private route : string;
    // private employees : string;
    private flight : Flight[] = [];
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
        this.flight.push(flight);
    }


}                