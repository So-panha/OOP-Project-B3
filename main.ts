// Person
import { Customer } from "./src/Customer";
import { Airlines } from "./src/Airline";
import { Airports } from "./src/Airport";
import { Address } from "./src/Address";

// Customers
const customer = new Customer(1,"Sopanha","Sin",21,"Sopanha@gmail.com","+855 71 32 03 852");


// addresses airports
const addressAirport = new Address("Phnom Penh","Cambodia",12000);

// adress airlines
const addressAngkorAirLine = new Address("Phnom Penh","Cambodia",12000);

// airlines
const angkorAirLine = new Airlines("Angkor","RL1223","+855 12 999 777 8855","Angkor@gmail.com",addressAngkorAirLine);

// airports
const airport1 = new Airports("Puchentong",addressAirport);


airport1.addAirline(angkorAirLine);

console.log(airport1);

