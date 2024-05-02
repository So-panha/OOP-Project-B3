import { Airlines } from "./Airline";
import { DepartureTime } from "./DepartureTimeFlight";


export class Flight {
    private airline: Airlines[] = [];;
    constructor(private flight_number: string, private origin: string, private destination: string, private DepartureTime: DepartureTime) {
    }

    // Add airline to flight
    addAirline(airline: Airlines) {
        this.airline.push(airline);
    }


    
}