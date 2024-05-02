import { Trip } from "../Trip";

export class Booking {
    private trips : Trip[] = [];
    constructor(private booking_reference: string) {}

    // Add trip to the booking
    addTrip(trip: Trip): void {
        this.trips.push(trip);
    }
}