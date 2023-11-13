"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainController_1 = __importDefault(require("./controllers/mainController"));
const router = (0, express_1.Router)();
router.get("/", mainController_1.default.accueil);
router.get("/:id", mainController_1.default.routes);
//router.get("/admin/adminConnection", mainController.adminConnection)
// router.post("/adminConnection", mainController.adminVerification)
exports.default = router;
