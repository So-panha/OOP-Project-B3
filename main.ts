// Person
import { Customer } from "./src/Customer";
import { Airlines } from "./src/Airline";
import { Airports } from "./src/Airport";
import { Address } from "./src/Address";
import { Airplane } from "./src/Airplane";
import { Flight } from "./src/Flight";
import { SearchFlight } from "./src/search_flight";

// Customers
const customer = new Customer(1,"Sopanha","Sin",21,"Sopanha@gmail.com","+855 71 32 03 852");

// searchFlight?: SearchFlightaddresses airports
const addressAirport = new Address("Phnom Penh","Cambodia",12000);

// adress airlines
const addressAngkorAirLine = new Address("Phnom Penh","Cambodia",12000);

// Create airports
const airport1 = new Airports("Puchentong",addressAirport);

// Create airlines
const angkorAirLine = new Airlines("Angkor","RL1223","+855 12 999 777 8855","Angkor@gmail.com",addressAngkorAirLine);

// Create airplane
const airplane1 = new Airplane("Angkor","BR1543","")

// Create flight
const flight1 = new Flight("Phnom Penh","Siem read","28/02/2024","03/03/2024");
const flight2 = new Flight("Phnom Penh","Takeo","28/02/2024","03/03/2024");

// Create seach flight  
const searchFlight = new SearchFlight("Phnom Penh","Siem read","28/02/2024","03/03/2024");

// Add airport to search flight
searchFlight.addAirport(airport1);

// Add Object to flight
flight1.addAirline(angkorAirLine);

// Add airline to airplane
airplane1.addAirline(angkorAirLine);

// Add airport to airline
angkorAirLine.addAirport(airport1);
angkorAirLine.addFlight(flight1);

// Add airline to airport
airport1.addAirline(angkorAirLine);
airport1.addFlight(flight1);
airport1.addFlight(flight2);



// Get search
searchFlight.getFlight();

// console.log(searchFlight.getFlight());
// console.log(result_flights);

