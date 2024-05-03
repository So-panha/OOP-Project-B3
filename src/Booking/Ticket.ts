import { TypeTicket } from "./type_ticket";
import { Flight } from "../Flight/Flight";
import { Seat } from "../Seat";
import { Gate } from "../Gate";
import { typeOfMeals } from "../Flight/Meal";
import { Passenger } from "./Passenger";

export class Ticket {
    constructor(private ticket_id: string, private type_ticket: TypeTicket, private flight: Flight, private seat: Seat, private gate: Gate,private Meal: typeOfMeals,private passenger: Passenger) {}
    // get tickets
    getFlight(): Flight{
        return this.flight;
    }

    // Get type of ticket
    getTypeTicket():string{
        return this.type_ticket;
    }

    // Get Passenger
    getPassenger():Passenger{
        return this.passenger;
    }

    // Get meal
    getMeal():typeOfMeals{
        return this.Meal;
    }

}

