export class ApiResponeModel{

    public code: string;
    public data: object;
    public error: string;
    public status: string;

    constructor(
        code:string,
        data:object,
        error: string,
        status: string
    ){
        this.code = code;
        this.data=data;
        this.error=error;
        this.status=status;
    }

}