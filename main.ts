// Person
import { Customer } from "./src/Customer";
import { Airlines } from "./src/Airline";
import { Airports } from "./src/Airport";
import { Address } from "./src/Address";
import { Airplane } from "./src/Airplane";
import { SearchFlight } from "./src/search_flight";
import { Flight } from "./src/Flight";
import { Attendant } from './src/Attendant';
import { CoPilot } from './src/CoPilot';
import { Pilot } from './src/Pilot';

// Customers
const customer = new Customer("A001","Sopanha","Sin",21,"Sopanha@gmail.com","+855 71 32 03 852","nice","nice");

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


const attendant = new Attendant(
  "A001",
  "Cabin Crew",
  "Cambodia, USA",
  "Senior",
  "BOUR",
  "SONGHA",
  19,
  "Male",
  "123 Main St",
  "66-980-232",
  "boursonga@gmail.com"
);
const coPilot = new CoPilot("C001", "5 years", "Excellent", "123456", "Training Record", "Sophanha", "Sin", 23, "Male", "123 Main St", "16-555-1234", "sophanha@gamil.com");
const pilot = new Pilot("P001", "10 years", "Captain", "A789012", "Aircraft Type", "Jane", "Smith", 35, "Female", "456 Elm St", "12-555-5678", "jane.smith@gmail.com");

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
console.log(attendant);

