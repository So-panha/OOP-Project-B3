import { Types } from "./Type";
export class Seat {
    private seatNumber: number;
    private seatType: Types;

    constructor(seatNumber: number, seatType: Types) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
    }
    getSeatNumber(): number {
        return this.seatNumber;
    }
    getSeatType(): Types {
        return this.seatType;
    }
}