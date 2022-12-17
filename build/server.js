"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const port = 8000;
const app = new _1.default().app;
app.listen(port, () => {
    console.log("-----------------------------------------");
    console.log(`This application is running in port ${port}`);
    console.log("-----------------------------------------");
});
