import { Request, Response } from 'express'

const mainController = {

    accueil(req: Request, res:Response)  {
            res.render("home")
    },

    routes(req: Request, res:Response):void  {
        const pageId: string | null = req.params.id
        if(pageId){
            res.render(pageId,{pageId})
        } else {
            console.error("Aucune page ne correspond à cet identifiant.")
        }
    },

    /*adminVerification(req: Request, res:Response):void {
        if(req.body.user==="wookie"){
            res.render("modifyTeam")
            }
            else{
            res.redirect("/admin")
            }
    },*/

}

export default mainController;