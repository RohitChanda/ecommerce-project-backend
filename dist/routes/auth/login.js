"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("../../controllers/auth/login"));
const express_joi_validation_1 = require("express-joi-validation");
const router = (0, express_1.Router)();
const validator = (0, express_joi_validation_1.createValidator)();
// function middlewareFunc(schema:any,property:string){
//     return (req:Request,res:Response,next:NextFunction)=>{
//         console.log(req.body);
//         const { error, value } = schema.validate(req.body);
//         console.log(error);
//         next()
//     }
// }
router.post('/auth/login', 
// validator.body(loginBodyValidators),
// middlewareFunc(loginBodyValidators,'body'),
login_1.default.doLogin);
exports.default = router;
