import { Model, Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tipoDocumento: { type: String, required: true },
  numeroDocumento: { type: String, required: true, unique: true },
  numeroCelular: { type: Number },
  peso: { type: String },
  fechaNacimiento: {
    type: Date,
  },
  password: { type: String },
  rol: { type: String, default: "USER" },
  token: { type: String, require: false },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UsuarioModel: Model<any> = model("usuarios", UsuarioSchema);
export default UsuarioModel;
