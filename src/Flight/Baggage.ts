import { Tag } from "./Tag";

export class Baggage {
    private tags : Tag[] = [];
    constructor(private bagage_wieght : number){};
    
    setTag(tag: Tag): void{
        this.tags.push(tag)
    }
}