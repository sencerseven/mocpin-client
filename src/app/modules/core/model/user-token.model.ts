export class UserToken{
    constructor(
        public username:string,
        public _token:string,
        public _tokenExpirationDate: Date,
        public _rtoken:string
    ){}

    get token(){
        if (!this._tokenExpirationDate || new Date > this._tokenExpirationDate)
        {
            return null;
        }
        return this._token;
    }

}




