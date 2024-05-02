import { TypeTicket } from "./Type_ticket";
import { Flight } from "../Flight/Flight";
import { Seat } from "../Seat";
import { Gate } from "../Gate";
import { typeOfMeals } from "../Flight/Meal";

export class Ticket {
    constructor(private ticket_id: string, private type_ticket: TypeTicket, private flight: Flight, private seat: Seat, private gate: Gate,private Meal: typeOfMeals) { }
}