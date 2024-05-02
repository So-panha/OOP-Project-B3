import { Trip } from "../Trip";

export class Booking {
    private trip : Trip;
    constructor(private booking_reference: string) {}

    // Add trip to the booking
    addTrip(trip: Trip): void {
        this.trip = trip;
    }
    // Get the booking
    getBookingReference(): string {
        return this.booking_reference;
    }
    // Get trip
    getTrip(): Trip{
        return this.trip
    }
}