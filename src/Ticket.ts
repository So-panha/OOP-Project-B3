import { Airlines } from "./Airline";

export class Ticket{
    private ticketName: string;
    private price: number;
    private airline: Airlines[] = [];
    constructor(ticketName: string, price: number){
        this.ticketName = ticketName;
        this.price = price;
    }
    getTicketName(): string{
        return this.ticketName;
    }
    setTicketName(name: string): void{
        this.ticketName = name;
    }
}