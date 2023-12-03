import { Router } from "express";
const router = Router();

import { create, findAll, findById, searchByCidade, byUser } from "../controllers/imovel.controller.js"
import { authMiddlewere } from "../middlewares/auth.middleware.js";

router.post("/", authMiddlewere, create);
router.get("/", findAll);
router.get("/search", searchByCidade);
router.get("/byUser", authMiddlewere, byUser)


router.get("/:id", authMiddlewere, findById);


export default router;