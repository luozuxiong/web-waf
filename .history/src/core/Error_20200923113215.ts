export default class WafError implements Error{
    constructor(name:String,message:String){
        name = name;
        this.message = message;
    }
    name: string;
    message: string;
    stack?: string | undefined;
}