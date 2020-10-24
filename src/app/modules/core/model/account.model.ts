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

}