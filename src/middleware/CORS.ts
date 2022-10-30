import cors from "cors"
import { Application } from "express";
interface corsInterface{
    origin:string[],
    optionsSuccessStatus?: number
}
class CORS{
    public mount (_express:Application): Application{
        const options: corsInterface = {
			origin: ['*'],
			// optionsSuccessStatus: 200		// Some legacy browsers choke on 204
		}

       return _express.use(cors(options));
    //    return _express.use(cors());
    }
}

export default new CORS();