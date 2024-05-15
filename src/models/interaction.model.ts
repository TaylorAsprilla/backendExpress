import { Model, Schema, model } from "mongoose";

const InteractionSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
  cliente: { type: Schema.Types.ObjectId, ref: "usuario", required: false },
});

export const InteraccionModel: Model<any> = model(
  "interaccion",
  InteractionSchema
);
