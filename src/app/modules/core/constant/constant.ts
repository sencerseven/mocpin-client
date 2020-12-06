import { environment } from "src/environments/environment";


export class Constant{

    SERVICE_URL=environment.serverUrl;


    
    constructor(){
        Object.defineProperty(this,"SERVICE_URL", {value: this.SERVICE_URL});
    }
}