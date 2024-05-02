import { Tag } from "./Tag";
import { Passenger } from "./Passenger";

export class Baggage {
    private tags : Tag[] = [];
    constructor(private passenger: Passenger, private bagage_wieght : number){};
    
    setTag(tag: Tag): void{
        this.tags.push(tag)
    }
}