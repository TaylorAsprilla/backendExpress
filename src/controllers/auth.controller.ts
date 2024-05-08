// 1. Solicitar datos email y contraseña
// 2. Validar Contraseña
// 3. Generar el Token
// 4. Login Exitoso

import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import generateJWT from "../helpers/jwt";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Verificar el email
    const usuario = await UsuarioModel.findOne({ email: email });

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        msg: "Las credenciales no son válidas",
      });
    }

    //Verificar el password
    const validarPassword = bcrypt.compareSync(password, usuario.password);
    if (!validarPassword) {
      return res.status(401).json({
        ok: false,
        msg: "Las credenciales no son válidas",
      });
    }

    // Generar Token
    const token = await generateJWT(usuario._id, usuario.email);

    res.status(200).json({
      ok: true,
      usuario,
      token,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
      msg: "Hable con el administrador",
    });
  }
};
