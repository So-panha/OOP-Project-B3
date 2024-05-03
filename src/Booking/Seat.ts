import { Types } from "./Type";
export class Seat {
    private seatNumber: string;
    private seatType: Types;

    constructor(seatNumber: string, seatType: Types) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
    }
    getSeatNumber(): string {
        return this.seatNumber;
    }
    getSeatType(): Types {
        return this.seatType;
    }
}