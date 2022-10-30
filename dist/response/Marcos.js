"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marcos = void 0;
class Marcos {
    success(data = {}, message = "Success", status_code = 200) {
        return (res) => res.status(status_code).json({
            data,
            message,
            status_code
        });
    }
    error(data = {}, message = "Error", status_code = 500) {
        return (res) => res.status(status_code).json({
            data,
            message,
            status_code
        });
    }
    warning(data = {}, message = "Warning", status_code = 200) {
        return (res) => res.status(status_code).json({
            data,
            message,
            status_code
        });
    }
}
exports.Marcos = Marcos;
