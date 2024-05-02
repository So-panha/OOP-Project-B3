import { Airlines } from "./Airline";
export class Airplane {
    private airline: Airlines[] = [];
    constructor(private airplaneName : string, private regesterName : string, private model : string){}

    //  Add airline to airplane
    addAirline(airline : Airlines) : void {
        this.airline.push(airline);
    }
}