"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Marcos_1 = require("../../response/Marcos");
class Login {
    constructor() {
        this.doLogin = (req, res) => {
            try {
                console.log('dologin');
                console.log(req.body);
                console.log(req.query);
                return this.responseHelper.success({}, '')(res);
            }
            catch (err) {
                console.log(err);
                return this.responseHelper.error({}, '')(res);
            }
        };
        this.responseHelper = new Marcos_1.Marcos();
    }
}
exports.default = new Login();
