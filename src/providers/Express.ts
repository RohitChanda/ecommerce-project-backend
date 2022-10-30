import  express from 'express';
import Routes from "./Routes"
import CORS from '../middleware/CORS';

export class Express {
    public express : express.Application;

    constructor(){
        this.express = express();
        this.mountCorsPolicy()
    }

    public init():any{
        const port: number = 3020;
        this.express.use(express.json());
        this.mountRoutes();
        // this.express.use(express.urlencoded({ extended: false }));

        this.express.listen(port, () => {
			return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
		}).on('error', (_error) => {
			return console.log('Error: ', _error.message);
        });
        
        /*const server = http.createServer(this.express);
        server.listen(port,()=>{
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            return console.log('Error: ', _error.message);
        });*/
    }

    private mountRoutes(): void{
        this.express = Routes.mount(this.express);
    }
    
    private mountCorsPolicy(): void {
        this.express = CORS.mount(this.express);
    }
}
