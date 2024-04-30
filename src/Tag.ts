import { Flight } from "./Flight";
import { Booking } from "./Booking";
export class Tag{
    private tag_id:string;
    private tag_name:string;
    private tag_description:string;
    constructor(tag_id:string, tag_name:string, tag){
        this.tag_id = tag_id;
        this.tag_name = tag_name;
        this.tag_description = tag;
    }
    getTagId():string{
        return this.tag_id;
    }
    getTagName():string{
        return this.tag_name;
    }
    getTagDescription():string{
        return this.tag_description;
    }
    setTagId(id:string):void{
        this.tag_id = id;
    }
    setTagName(name:string):void{
        this.tag_name = name;
    }
    setTagDescription(description:string):void{
        this.tag_description = description;
    }
}