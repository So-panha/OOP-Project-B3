export class SearchFlight {
    constructor(private origin: string, private destination: string, private departureDate: string, private returnDate: string) {};

    // Get search
    getKeySearches(): string {
        return this.origin + " - " + this.destination + " - " + this.departureDate + " - " + this.returnDate;
    }
}