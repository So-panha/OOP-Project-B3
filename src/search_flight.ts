import { Airlines } from "./Airline";
import { Airports } from "./Airport";
import { Flight } from "./Flight";

export class SearchFlight {
    private airports: Airports;

    constructor(private origin: string, private destination: string, private departureDate: string, private returnDate: string){};

    // search flight
    addAirport(airport : Airports) : void{
        this.airports = airport;
    }

    getFlight(): Airports{
        const flights = this.airports.getFlights();
        flights.forEach(flight => {
            if(flight.getFlight())
            console.log(flight.getFlight());
        });
        
        return this.airports;
    }

    // Get search flights
    getSearchFlight(): string{
        return this.origin + " " + this.destination + " " + this.departureDate + " " + this.returnDate;
    }
}