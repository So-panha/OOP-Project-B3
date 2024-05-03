// Person
import { Airlines } from "./src/Flight/Airline";
import { Airports } from "./src/Flight/Airport";
import { Address } from "./src/Employees/Address";
import { Airplane } from "./src/Flight/Airplane";
import { Flight } from "./src/Flight/Flight";
import { Ticket } from "./src/Booking/Ticket";
// import { Booking } from "./src/Booking/Booking";
import { Passenger } from "./src/Booking/Passenger";
import { Tag } from "./src/Flight/Tag";
import { Baggage } from "./src/Flight/Baggage";
import { DepartureTime } from "./src/Flight/DepartureTimeFlight";
import { Gate } from "./src/Gate";
import { Types } from "./src/Type";
import { Seat } from "./src/Seat";
import { TypeTicket } from "./src/Booking/type_ticket";
import { Trip } from "./src/Trip";
import { typeOfMeals } from "./src/Flight/Meal";
import { Booking } from "./src/Booking/Booking";
import { Pilot } from "./src/Employees/Pilot";
import { CoPilot } from "./src/Employees/CoPilot";
import { Attendant } from "./src/Employees/Attendant";


// co-pilot
const addressCo = new Address("London", "UK", 12);
const coPilot = new CoPilot("CP023",30,"First Officer","124 456 899","Training Record",7000,"Naraka","Devop",30,"Male","naraka.dovop@gmail.com","88-456-7890", addressCo);
// console.log(coPilot);


// Pilot 
const address = new Address("Phnom Penh", "Cambodia", 11,);
const pilot = new Pilot("P011","Boeing 747",5000,10,"BOUR","KLAN",19,"Male","bour.klan.web@gmail.com","66-980-232",address);
console.log(pilot);

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

// attandent
const addressAttendant = new Address("Seim Reab", "Cambodia",1);
const attendant = new Attendant("A023","Phnom Penh","English, French, Cambodia","Senior",2500,3,"Naomi","Fare",25,"Female","naomi.fare@gmail.com","99-654-3210",addressAttendant);
console.log(attendant);


// Add airline to airplane
airplane1.addAirline(angkorAirLine);
airplane2.addAirline(BangKokAirLine);

// departure time flight
const departureTimeFlight1 = new DepartureTime("28/02/2024", "02/03/2024");
const departureTimeFlight2 = new DepartureTime("09/03/2024", "13/03/2024");
const departureTimeFlight3 = new DepartureTime("13/03/2024", "14/03/2024");

// Create flight
const flight1 = new Flight("G3424","Phnom Penh", "Siem Reab", departureTimeFlight1);
const flight2 = new Flight("G3424","Phnom Penh", "Takeo", departureTimeFlight2);
const flight3 = new Flight("G3424","Takeo", "Phnom Penh", departureTimeFlight3);

// Create gate
const gate1 = new Gate("GMD53","open","ground floor")
const gate2 = new Gate("GH673","open","first floor")
const gate3 = new Gate("UID83","open","second floor")



// Add airport to airline
angkorAirLine.addAirport(airport1);
BangKokAirLine.addAirport(airport2);


// Add flight to the airline
angkorAirLine.addFlight(flight1);
angkorAirLine.addFlight(flight2);
BangKokAirLine.addFlight(flight3);

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


// Feature booking

// Create seat
const seat1 = new Seat("D13",Types.classes);
const seat2 = new Seat("E13",Types.business);
const seat3 = new Seat("F13",Types.flex);

// Address
const addressDara = new Address("Kompong Speu","Cambodia",1100);
const addressChampa = new Address("Takeo","Cambodia",1400);
const addressMina = new Address("Phnom Penh","Cambodia",12001);

// Passenger
const Dara = new Passenger("001","Dara","Tim",20,"male","+855 96 432 784","dara@gmail.com", addressDara);
const Champa = new Passenger("002","Champa","Vorn",18,"female","+855 92 322 554","champa@gmail.com", addressChampa);
const Mina = new Passenger("003","Mina","So",19,"female","+855 81 421 454","Mina@gmail.com", addressMina);

// tag of baggage
const tag1 = new Tag("001","TLD");
const tag2 = new Tag("002","TLD");
const tag3 = new Tag("003","TLD");

// Baggae
const daraBaggage1 = new Baggage(10);
const daraBaggage2 = new Baggage(5);

const ChampaBaggage1 = new Baggage(8);
const ChampaBaggage2 = new Baggage(7);

const MinaBaggage1 = new Baggage(13);
const MinaBaggage2 = new Baggage(2);

// Add tag to baggages
daraBaggage1.setTag(tag1);
daraBaggage2.setTag(tag1);  

ChampaBaggage1.setTag(tag2);
ChampaBaggage2.setTag(tag2);

MinaBaggage1.setTag(tag3);
MinaBaggage2.setTag(tag3);

// Create ticket
const ticket1 = new Ticket("001",TypeTicket.round_trip,flight1,seat1,gate1,typeOfMeals.low_sodium_noSalt,Dara);
const ticket2 = new Ticket("002",TypeTicket.round_trip,flight1,seat2,gate1,typeOfMeals.gluten_free,Champa);
const ticket3 = new Ticket("003",TypeTicket.one_way,flight1,seat3,gate1,typeOfMeals.baby,Mina);
// console.log(ticket1);

// Create trip
const trip1 = new Trip();
trip1.addTicket(ticket1);
trip1.addPassenger(Dara);
trip1.addBaggage(daraBaggage1);
trip1.addBaggage(daraBaggage2);

const trip2 = new Trip();
trip2.addTicket(ticket2);
trip2.addPassenger(Champa);
trip2.addBaggage(ChampaBaggage1);
trip2.addBaggage(ChampaBaggage2);

const trip3 = new Trip();
trip3.addTicket(ticket3);
trip3.addPassenger(Mina);
trip3.addBaggage(MinaBaggage1);
trip3.addBaggage(MinaBaggage2);

// Create booking 
const booking1 = new Booking("AFR123");
booking1.addTrip(trip1)

const booking2 = new Booking("JGR533");
booking2.addTrip(trip2)

const booking3 = new Booking("JYU533");
booking2.addTrip(trip3)

//  add booking to the airport
airport1.addBooking(booking1);
airport1.addBooking(booking2);
airport1.addBooking(booking3);
// console.log(airport1);

// // Add ticket to the flight
flight1.addTicket(ticket1);
flight1.addTicket(ticket2);
flight1.addTicket(ticket3);

// console.log(airport1.getDetailInfor("AFR123"));
// Feature get detail infor form booking reference
console.log(airport1.getDetailInfor("AFR123"));

// Feature check ticket
angkorAirLine.getCheckTicket("G3424");
console.log(angkorAirLine.getCheckTicket("G3424"));

// Check meal on flight
console.log(angkorAirLine.getCheckMeal("G3424"));


















































































// //Create ticket
// const ticket = new Ticket("KPC tickets", 100);

// Create a Booking object
// const booking = new Booking(
//     "ABC123",
//     "123456",
//     "Departure Airport",
//     "Destination Airport",
//     new Date(),
//     ticket
// );

// //Create Passenger
// const passenger = new Passenger("P123");

// // Create an instance of the Tag class
// const tag = new Tag("1", "Kea Tag", "It is small");

// // Attendant
// const attendant = new Attendant(
//     "A001",
//     "Cabin Crew",
//     "Cambodia, USA",
//     "Senior",
//     "BOUR",
//     "SONGHA",
//     19,
//     "Male",
//     "123 Main St",
//     "66-980-232",
//     "boursonga@gmail.com"
// );

// // Co pilot
// const coPilot = new CoPilot("C001", "5 years", "Excellent", "123456", "Training Record", "Sophanha", "Sin", 23, "Male", "123 Main St", "16-555-1234", "sophanha@gamil.com");

// // Pilot
// const pilot = new Pilot("P001", "10 years", "Captain", "A789012", "Aircraft Type", "Jane", "Smith", 35, "Female", "456 Elm St", "12-555-5678", "jane.smith@gmail.com");

// console.log(attendant);

// Booking  
// const bookflight1 = new Booking("H1452",airport1.getFlights(),airport1.getFlights());

// // Add customer on booking
// bookflight1.addCustomer(customer1);

// // Add passenger on each booking
// bookflight1.addPassenger(Dara);
// bookflight1.addPassenger(Champa);
// bookflight1.addPassenger(Mina);

// // Add booking to each passenger
// Dara.addBooking(bookflight1);
// Champa.addBooking(bookflight1);
// Mina.addBooking(bookflight1);

// // log the booking
// // console.log(Dara);


// // Add book into airport
// airport1.addbooking(bookflight1);


// console.log(airport1.getDetailBookings("H1452"));
