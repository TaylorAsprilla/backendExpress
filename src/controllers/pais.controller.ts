import { Request, Response } from "express";
import { PaisModel } from "../models/pais.model";

export const getPaises = async (req: Request, res: Response) => {
  try {
    const paises = await PaisModel.find();

    res.json({
      ok: true,
      paises,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: "Error al consultar los paises",
    });
  }
};
