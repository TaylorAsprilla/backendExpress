import { Router } from "express";
import {
  crearInteraction,
  eliminarInteraccion,
  getInteracciones,
  getUnaInteraccion,
  updateInteraccion,
} from "../controllers/interaction.controller";
import { validateJWT } from "../middlewares/validate-jwt";
import { check } from "express-validator";

const router = Router();

router.post(
  "/",
  validateJWT,
  [check("descripcion", "La descripcion es obligatoria").not().isEmpty()],
  crearInteraction
);

router.get("/", validateJWT, getInteracciones);
router.get("/:id", validateJWT, getUnaInteraccion);
router.put("/:id", validateJWT, updateInteraccion);
router.delete("/:id", validateJWT, eliminarInteraccion);

export default router;
