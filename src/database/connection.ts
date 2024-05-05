import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const dbUrl = process.env.DB_CONNECTION;

    if (!dbUrl) {
      throw new Error(
        "Error en la conexión de la base de datos, no existe la url"
      );
    }

    await mongoose.connect(dbUrl);
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    console.log("Error en la conexión de la base de datos");
  }
};
