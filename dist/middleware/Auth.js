"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    authMiddleWare(req, res, next) {
        try {
            console.log("this is auth middleware");
            next(); //pass to next
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = new Auth();
