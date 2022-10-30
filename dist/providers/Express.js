"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
const CORS_1 = __importDefault(require("../middleware/CORS"));
class Express {
    constructor() {
        this.express = (0, express_1.default)();
        this.mountCorsPolicy();
        this.mountRoutes();
    }
    init() {
        const port = 3020;
        // this.express.use(Routes);
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.listen(port, () => {
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            return console.log('Error: ', _error.message);
        });
        ;
    }
    mountRoutes() {
        this.express = Routes_1.default.mount(this.express);
    }
    mountCorsPolicy() {
        this.express = CORS_1.default.mount(this.express);
    }
}
exports.default = new Express();
