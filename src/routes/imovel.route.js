import { Router } from "express";
const router = Router();

import { create, findAll, findById } from "../controllers/imovel.controller.js"
import { authMiddlewere } from "../middlewares/auth.middleware.js";

router.post("/", authMiddlewere, create)
router.get("/", findAll)
//"/:id" parâmetro que passo para a rota, a ser capturado em controller e buscado no service
router.get("/:id", findById)

export default router;