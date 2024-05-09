//path /api/v1/login

import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {
  cambioContrasena,
  login,
  olvidoContrasena,
} from "../controllers/auth.controller";
import { validateJWT } from "../middlewares/validate-jwt";

const router = Router();

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  login
);

router.post(
  "/olvidocontrasena",
  [
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("numeroDocumento", "El número de documento obligatorio")
      .not()
      .isEmpty(),
    validateFields,
  ],
  olvidoContrasena
);

//TODO implementar el validateJWTPass
router.put(
  "/cambiocontrasena",

  [check("password", "El password es obligatorio").not().isEmpty()],
  cambioContrasena
);

export default router;
