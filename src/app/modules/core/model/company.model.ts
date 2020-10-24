import { District } from "./district.model";
import { Province } from "./province.model";

export interface Company{
    id:number,
    name:string,
    type:string,
    province:Province,
    district:District;

}