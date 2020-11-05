import { Role } from "../enums/Role.enum";
import { AccountDetail } from "./account-detail.model";

export class Account{

    public id:number;
    public username:string;
    public roleType:string[];
    public accountDetail:AccountDetail;

    constructor(username:string,accountDetail:AccountDetail,id?:number,roleType?:string[]){
        this.id=id;
        this.username = username;
        this.accountDetail=accountDetail;
        this.roleType=roleType;
    }

    public isAdmin():boolean{
       return this.roleType.includes(Role.ADMIN);
    }

    public isSupervisor():boolean{
       return this.roleType.includes(Role.SUPERVISOR);
    }

}