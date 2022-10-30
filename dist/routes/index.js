"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const test_1 = __importDefault(require("./test"));
const routes = [
    auth_1.default,
    test_1.default
];
exports.default = routes;
