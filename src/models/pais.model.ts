import { Model, Schema, model } from "mongoose";

const PaisSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  nom: {
    type: String,
  },
  iso2: {
    type: String,
  },
  iso3: {
    type: String,
  },
  phone_code: {
    type: String,
  },
});

export const PaisModel: Model<any> = model("paises", PaisSchema);
