export class DepartureDate {
    constructor(private departureDateStart: string, private departureDateEnd: string) {}

    // Get date of start flight
    getDepartureDateStart(): string {
        return this.departureDateStart;
    }

    // Get date of end flight
    getDepartureDateEnd(): string {
        return this.departureDateEnd;
    }
}