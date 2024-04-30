// Person
import { Customer } from "./src/Customer";
import { Airlines } from "./src/Airline";
import { Airports } from "./src/Airport";
import { Address } from "./src/Address";
import { Airplane } from "./src/Airplane";
import { SearchFlight } from "./src/search_flight";
import { Flight } from "./src/Flight";
import {Ticket } from "./src/Ticket";
import {Booking } from "./src/Booking";
import {Passenger} from "./src/Passenger";
import {Tag } from "./src/Tag";

// Customers
const customer = new Customer(1,"Sopanha","Sin",21,"Sopanha@gmail.com","+855 71 32 03 852");

const addressAirport = new Address("Phnom Penh","Cambodia",12000);

// adress airlines
const addressAngkorAirLine = new Address("Phnom Penh","Cambodia",12000);

// Create airports
const airport1 = new Airports("Puchentong",addressAirport);

// Create airlines
const angkorAirLine = new Airlines("Angkor","RL1223","+855 12 999 777 8855","Angkor@gmail.com",addressAngkorAirLine);

// Create airplane
const airplane1 = new Airplane("Angkor","BR1543","");

// Create flight

const flight1 = new Flight("Phnom Penh","Siem Reab","28/02/2024","02/03/2024");
const flight2 = new Flight("Phnom Penh","Takeo","09/03/2024","13/03/2024");

// Create searchFlight
const searchFlight = new SearchFlight("Phnom Penh","Siem Reab","28/02/2024","02/03/2024");

//Create ticket
const ticket = new Ticket("KPC tickets", 100);

// Create a Booking object
const booking = new Booking(
    "ABC123",
    "123456",
    "Departure Airport",
    "Destination Airport",
    new Date(),
    ticket
);

//Create Passenger
const passenger = new Passenger("P123");

// Create an instance of the Tag class
const tag = new Tag("1", "Kea Tag", "It is small");


// Add airline to airplane
airplane1.addAirline(angkorAirLine);

// Add airport to airline
angkorAirLine.addAirport(airport1);
angkorAirLine.addFlight(flight1);

// Add airline to airport
airport1.addAirline(angkorAirLine);
airport1.addFlight(flight1);
airport1.addFlight(flight2);

// Add airport to searchFlight
searchFlight.addAirport(airport1);

// Get search
searchFlight.getFlight();

// console.log(searchFlight.getFlight());
// console.log(result_flights);

