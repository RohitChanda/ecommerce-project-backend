import { Application } from "express";
import routes from "../routes"
class Routes {
    public mount(_express:Application): Application{
       return _express.use(...routes);
    }
}

export default new Routes();