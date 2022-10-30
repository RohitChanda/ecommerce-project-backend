"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("../../middleware/Auth"));
const router = (0, express_1.Router)();
router.use(Auth_1.default.authMiddleWare);
router.get('/test/test', (req, res) => {
    return res.json({
        data: "test api"
    });
});
exports.default = router;