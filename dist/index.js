"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8888;
const router_1 = __importDefault(require("../src/app/router"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express_1.default.static("./public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:` + PORT);
});
