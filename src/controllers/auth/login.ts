import { Request,Response } from "express";
import { Marcos } from "../../response/Marcos";

class Login {
    private responseHelper: Marcos;
   

    constructor(){
        this.responseHelper = new Marcos();
    }

    public doLogin = (req:Request,res:Response) => {
        try {
            console.log('dologin');
            console.log(req.body);
            console.log(req.query);
            
            
            return  this.responseHelper.success({},'')(res);
        } catch (err) {
            console.log(err);
            return  this.responseHelper.error({},'')(res);
        }
       
    }
}

export default new Login();
