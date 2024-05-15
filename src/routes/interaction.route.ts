import { Router } from "express";
import { crearInteraction } from "../controllers/interaction.controller";
import { validateJWT } from "../middlewares/validate-jwt";
import { check } from "express-validator";

const router = Router();

router.post(
  "/",
  validateJWT,
  [check("descripcion", "La descripcion es obligatoria").not().isEmpty()],
  crearInteraction
);

export default router;
