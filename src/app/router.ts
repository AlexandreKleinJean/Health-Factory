import { Router } from 'express';
import mainController from './controllers/mainController'
const router = Router();

router.get("/", mainController.accueil)
router.get("/:id", mainController.routes)

//router.get("/admin/adminConnection", mainController.adminConnection)

//router.post("/adminConnection", mainController.adminVerification)

export default router;