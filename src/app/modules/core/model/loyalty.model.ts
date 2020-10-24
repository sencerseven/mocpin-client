import { BranchOutput } from "./branch-output.model";

export interface Loyalty{
    id:number,
    name:string,
    description:string,
    status:string
    branches:BranchOutput[];
}