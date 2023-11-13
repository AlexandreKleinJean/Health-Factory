"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainController = {
    accueil(req, res) {
        const pageId = req.params.id;
        res.render("home", { pageId });
    },
    routes(req, res) {
        const pageId = req.params.id;
        res.render(pageId, { pageId });
    },
    adminVerification(req, res) {
        if (req.body.user === "wookie") {
            res.render("modifyTeam");
        }
        else {
            res.redirect("/admin");
        }
    },
};
exports.default = mainController;
