"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainController = {
    accueil(req, res) {
        const pageId = req.params.id;
        if (pageId) {
            res.render("home", { pageId });
        }
        else {
            console.error('Aucune page ne correspond à cet identifiant.');
        }
    },
    routes(req, res) {
        const pageId = req.params.id;
        if (pageId) {
            res.render(pageId, { pageId });
        }
        else {
            console.error('Aucune page ne correspond à cet identifiant.');
        }
    },
    /*adminVerification(req: Request, res: Response):void {
        if(req.body.user==="wookie"){
            res.render("modifyTeam")
            }
            else{
            res.redirect("/admin")
            }
    },*/
};
exports.default = mainController;
