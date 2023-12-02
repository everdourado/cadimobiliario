import { Router } from "express";
const router = Router();

import { create, findAll } from "../controllers/imovel.controller.js"
import { authMiddlewere } from "../middlewares/auth.middleware.js";

router.post("/", authMiddlewere, create)
router.get("/", findAll)

export default router;