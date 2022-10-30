import { Response } from "express";

export class Marcos {
    public success(data:Object = {}, message:string = "Success", status_code: number = 200){
        return (res:Response) => res.status(status_code).json({
            data,
            message,
            status_code
        });  
    }

    public error(data:Object = {}, message:string = "Error", status_code: number = 500){
        return (res:Response) => res.status(status_code).json({
            data,
            message,
            status_code
        });
    }
    
    public warning(data:Object = {}, message:string = "Warning", status_code: number = 200){
        return (res:Response) => res.status(status_code).json({
            data,
            message,
            status_code
        });
    }
}
