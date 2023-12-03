import { Router } from "express";
const router = Router();

import { create, findAll, findById, searchByCidade } from "../controllers/imovel.controller.js"
import { authMiddlewere } from "../middlewares/auth.middleware.js";

router.post("/", authMiddlewere, create);
router.get("/", findAll);
router.get("/search", authMiddlewere, searchByCidade);


router.get("/:id", findById);


export default router;