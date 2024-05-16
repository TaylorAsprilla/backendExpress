import { Model, Schema, model } from "mongoose";

const UbicacionSchema = new Schema({
  country: {
    type: String,
    required: false,
  },
  countryCode: {
    type: String,
    required: false,
  },
  region: {
    type: String,
    required: false,
  },
  regionName: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
  lat: {
    type: String,
    required: false,
  },
  lon: {
    type: String,
    required: false,
  },
  timezone: {
    type: String,
    required: false,
  },
  isp: {
    type: String,
    required: false,
  },
  org: {
    type: String,
    required: false,
  },
  as: {
    type: String,
    required: false,
  },
  query: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
});

const UbicacionModel: Model<any> = model("ubicacion", UbicacionSchema);
export default UbicacionModel;
