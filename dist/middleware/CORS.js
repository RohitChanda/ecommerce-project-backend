"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
class CORS {
    mount(_express) {
        const options = {
            origin: ['*'],
            // optionsSuccessStatus: 200		// Some legacy browsers choke on 204
        };
        return _express.use((0, cors_1.default)(options));
        //    return _express.use(cors());
    }
}
exports.default = new CORS();
