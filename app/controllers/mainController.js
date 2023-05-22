//const dataMapper = require("../dataMapper");
//"password authentification failed for user "student" "

const mainController = {

    accueil(req, res) {
        const pageId = req.params.id
        res.render("home",{pageId})
    },

    routes(req, res) {
        const pageId = req.params.id
        res.render(pageId,{pageId})
    },

    adminVerification(req, res) {
        if(req.body.user==="wookie"){
            res.render("modifyTeam")
            }
            else{
            res.redirect("/admin")
            }
    },
    
    addMemberTeam: async function(req, res){
      /*  const form = req.body
        console.log(form)
        const result = await dataMapper.addMemberTeam(form);
      */
        res.redirect("/staff"/*,{result}*/)
    }

}

module.exports = mainController;