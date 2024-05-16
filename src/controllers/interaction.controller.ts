// Qué debemos hacer en el controlador?

import { Request, Response } from "express";
import { CustomRequest } from "../middlewares/validate-jwt";
import { InteraccionModel } from "../models/interaction.model";

export const crearInteraction = async (req: CustomRequest, res: Response) => {
  const id = req._id;
  const body = req.body;

  const { descripcion, cliente } = body;

  try {
    const interaction = new InteraccionModel({
      usuario: id,
      descripcion,
      cliente,
    });

    const newInteraction = await interaction.save();

    res.status(200).json({
      ok: true,
      msg: "Interacion creada",
      interaction: newInteraction,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear la interaction, comuniquese con el administrador",
    });
  }
};

export const getInteracciones = async (req: Request, res: Response) => {
  try {
    const interacciones = await InteraccionModel.find()
      .populate({
        path: "usuario",
        select: "nombre email numeroCelular",
      })
      .populate({
        path: "cliente",
        select: "nombre email numeroCelular",
      });

    res.json({
      ok: true,
      interacciones,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: "Error al consultar las interacciones",
    });
  }
};

export const getUnaInteraccion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const interaccion = await InteraccionModel.findById({ _id: id });

    res.json({
      ok: true,
      interaccion,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al consultar la interacción",
    });
  }
};

export const updateInteraccion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;

    const interaccionActualizada = await InteraccionModel.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    res.json({
      ok: true,
      msg: "Interacción Actualizada",
      interaccion: interaccionActualizada,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: "Error al actualizar la interacción",
    });
  }
};

export const eliminarInteraccion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const interaccionEliminada = await InteraccionModel.findByIdAndDelete({
      _id: id,
    });

    res.json({
      ok: true,
      msg: "Interaccion Eliminada",
      interaccion: interaccionEliminada,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      ok: false,
      msg: "Error al eliminar la interacción",
    });
  }
};
