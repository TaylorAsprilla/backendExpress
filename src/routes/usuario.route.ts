import {
  eliminarUsuario,
  getUnUsuario,
  getUsuarios,
  updateUsuario,
} from "./../controllers/usuario.controller";
import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { validateJWT } from "../middlewares/validate-jwt";

//path /api/v1/usuario

const router = Router();

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("numeroDocumento", "El número de documento es obligatorio")
      .not()
      .isEmpty(),
    check("email", "El correo electrónico es obligatorio")
      .not()
      .isEmpty()
      .isEmail(),
    validateFields,
  ],
  crearUsuario
);
router.get("/", getUsuarios);
router.get("/:id", validateJWT, getUnUsuario);
router.put("/:id", validateJWT, updateUsuario);

router.delete("/:id", validateJWT, eliminarUsuario);

export default router;
