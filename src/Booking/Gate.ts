export class Gate {
    constructor(private gateNumber: string, private status: string, private location: string){}

    // Get gate name
    getNameGate(): string {
        return this.gateNumber;
    }
}