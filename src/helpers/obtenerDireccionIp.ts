import axios from "axios";
import { config } from "../config/config";

const environment = config[process.env.NODE_ENV || "desarrollo"];
const ipApiBaseUrl = environment.ipApi;

export const obtenerUbicacionPorIP = async (
  ipAddress: string,
  apiBaseUrl: string = ipApiBaseUrl
) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${ipAddress}`);

    if (response.data.status !== "success") {
      throw new Error(
        "La solicitud a la API no fue exitosa: " + response.data.message
      );
    }

    return response.data;
  } catch (error) {
    console.error("Error al obtener la ubicación por IP", error);
    throw error;
  }
};
