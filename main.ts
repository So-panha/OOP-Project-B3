// Person
import { Customer } from "./src/Customer";
import { Airlines } from "./src/Airline";
import { Airports } from "./src/Airport";
import { Address } from "./src/Address";
import { Airplane } from "./src/Airplane";
import { SearchFlight } from "./src/search_flight";
import { Flight } from "./src/Flight";
import { Ticket } from "./src/Ticket";
import { Booking } from "./src/Booking";
import { Passenger } from "./src/Passenger";
import { Tag } from "./src/Tag";
import { Attendant } from './src/Attendant';
import { CoPilot } from './src/CoPilot';
import { Pilot } from './src/Pilot';

// Feature flight

// Address airports
const addressAirportd1 = new Address("Phnom Penh", "Cambodia", 12000);
const addressAirport2 = new Address("Bangkok", "Thailand", 13000);

// Create airports
const airport1 = new Airports("Puchentong", addressAirportd1);
const airport2 = new Airports("Bangkok", addressAirport2);

// adress airlines
const addressAngkorAirLine = new Address("Phnom Penh", "Cambodia", 12000);
const addressBangKokAirLine = new Address("Bangkok", "Thailand", 13000);

// Create airlines
const angkorAirLine = new Airlines("Angkor", "RL1223", "+855 12 999 777 8855", "Angkor@gmail.com", addressAngkorAirLine);
const BangKokAirLine = new Airlines("Bangkok", "RI5655", "+856 12 88 434", "Bangkok@gmail.com", addressBangKokAirLine);

// Create airplane
const airplane1 = new Airplane("Angkor", "BR1543", "");
const airplane2 = new Airplane("Bangkok", "UI6675", "");

// Create flight

const flight1 = new Flight("Phnom Penh", "Siem Reab", "28/02/2024", "02/03/2024");
const flight2 = new Flight("Phnom Penh", "Takeo", "09/03/2024", "13/03/2024");
const flight3 = new Flight("Takeo", "Phnom Penh", "13/03/2024", "14/03/2024");

// Create searchFlight
const searchFlight1 = new SearchFlight("Phnom Penh", "Takeo", "09/03/2024", "13/03/2024");
const searchFlight2 = new SearchFlight("Takeo", "Phnom Penh", "13/03/2024", "14/03/2024");

// Add airline to airplane
airplane1.addAirline(angkorAirLine);
airplane2.addAirline(BangKokAirLine);

// Add airport to airline
angkorAirLine.addAirport(airport1);
angkorAirLine.addFlight(flight1);

BangKokAirLine.addAirport(airport2);
BangKokAirLine.addFlight(flight2);

// Add airline to airport
airport1.addAirline(angkorAirLine);
airport2.addAirline(BangKokAirLine);

// Add flight to airport
airport1.addFlight(flight1);
airport1.addFlight(flight2);
airport1.addFlight(flight3);

// Add airline to flight
flight1.addAirline(BangKokAirLine);
flight2.addAirline(angkorAirLine);
flight3.addAirline(angkorAirLine);

// Add airport to searchFlight
airport1.addSearch(searchFlight1);
airport1.addSearch(searchFlight2)

// Get search
console.log(airport1.getFlights());




// Feature booking

// Customer address
const addressCustomer1 = new Address("Phnom Penh", "Cambodia", 12000);

// Customers
const customer1 = new Customer("A001", "Sopanha", "Sin", 21, "male", "+855 71 32 03 852", "Sopanha@gmail.com", addressCustomer1);

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

// Attendant
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

// Co pilot
const coPilot = new CoPilot("C001", "5 years", "Excellent", "123456", "Training Record", "Sophanha", "Sin", 23, "Male", "123 Main St", "16-555-1234", "sophanha@gamil.com");

// Pilot
const pilot = new Pilot("P001", "10 years", "Captain", "A789012", "Aircraft Type", "Jane", "Smith", 35, "Female", "456 Elm St", "12-555-5678", "jane.smith@gmail.com");

console.log(attendant);

