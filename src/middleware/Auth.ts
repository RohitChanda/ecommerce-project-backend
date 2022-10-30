import { Request,Response, NextFunction } from "express";
class Auth {

    public authMiddleWare (req: Request, res: Response, next: NextFunction) {
        try {
            console.log("this is auth middleware");
            next(); //pass to next
            
        } catch (err) {
            console.log(err);
        }
        
    }
}

export default new Auth();