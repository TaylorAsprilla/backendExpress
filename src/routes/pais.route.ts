//path /api/v1/pais

import { Router } from "express";
import { getPaises } from "../controllers/pais.controller";

const router = Router();

router.get("/", getPaises);

export default router;
