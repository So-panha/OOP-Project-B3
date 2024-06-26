import { Address } from "../Employees/Address";
import { Airports } from "./Airport";
import { Airplane } from "./Airplane";
import { Flight } from "./Flight";
import { Passenger } from "../Passenger/Passenger";
import { typeOfMeals } from "../Booking/Meal";
import { Employee } from "../Employees/Employee";
import { Pilot } from "../Employees/Pilot";
import { DepartureDate } from "./DepartureDateFlight";

export class Airlines {
    private employees: Employee[] = [];
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

    addEmployee(employee : Employee){
        this.employees.push(employee);
    }

    // Get total salary
    getAllSalary(): number{
        let totalSalary = 0;
        this.employees.forEach(employee => {
            totalSalary += employee.getSalary();
        });
        return totalSalary;
    }

    // Get flight 
    getFlightByPilot(pilot: Pilot, date: DepartureDate): Flight[]{
        const flights: Flight[] = [];
        this.flights.forEach(flight => {
            if(flight.getDepartureTime().getDepartureDateStart() === date.getDepartureDateStart() && flight.getDepartureTime().getDepartureDateEnd() === date.getDepartureDateEnd() && pilot.getId() === flight.getPilot().getId()){
                flights.push(flight);
            }
        });
        return this.flights;
    }

}                