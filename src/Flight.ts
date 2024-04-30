import { Airlines } from "./Airline";
import { CoPilot } from "./CoPilot";


export class Flight {
    private airline: Airlines[] = [];;
    constructor(private origin: string, private destination: string, private departureDate: string, private returnDate: string) {
    }

    // Add airline to flight
    addAirline(airline: Airlines) {
        this.airline.push(airline);
    }

    getFlight(): string {
        return this.origin + " - " + this.destination + " - " + this.departureDate + " - " + this.returnDate;
        
    }
    
}