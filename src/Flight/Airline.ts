import { Address } from "../Employees/Address";
import { Airports } from "./Airport";
import { Airplane } from "./Airplane";
import { Flight } from "./Flight";
import { Passenger } from "../Booking/Passenger";
import { typeOfMeals } from "./Meal";

export class Airlines {

    private flights : Flight[] = [];
    private airplanes : Airplane[] = []; 
    private airport : Airports[] = [];
    passengers: Passenger[];
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
    getCheckTicket(flight_number : string): Passenger[] {
        const passengers : Passenger[] = [];
        this.flights.forEach(flight => {
            if(flight.getFlightNumber() === flight_number){
                const allTicket = flight.getAllTickets();
                allTicket.forEach(ticket => {
                    if(ticket.getTypeTicket() === "round_trip"){
                        passengers.push(ticket.getPassenger());
                    }
                });
            }
        });
        return passengers;
    }

    //  Check meal on flight
    getCheckMeal(flight_number : string): typeOfMeals[]{
        const meals : typeOfMeals[] = [];
        this.flights.forEach(flight => {
            if(flight.getFlightNumber() === flight_number){
                const allTicket = flight.getAllTickets();
                allTicket.forEach(ticket => {
                        meals.push(ticket.getMeal());
                });
            }            
        });
        return meals;
    }

}                