

export class Constant{

    SERVICE_URL='http://localhost:1234';


    
    constructor(){
        Object.defineProperty(this,"SERVICE_URL", {value: this.SERVICE_URL});
    }
}