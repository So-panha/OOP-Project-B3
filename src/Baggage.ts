import { Tag } from "./Tag";
export class Bagage {
    private tags : Tag[] = [];
    constructor(private bagage_id: string, private bagage_wieght : number,){};
    
    setTag(tag: Tag): void{
        this.tags.push(tag)
    }
}