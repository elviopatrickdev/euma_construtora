import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  lat: Number,
  lng: Number,
  type: {
    type: String,
    required: true,
    enum: ["Residencial", "Comercial", "Hotelaria"], 
  },
  year: Number,
  description: String,
  images: [String],
  specs: {
    area: { type: Number, min: 0 },   
    beds: { type: Number, min: 0 },   
    bath: { type: Number, min: 0 },   
    parking: { type: Number, min: 0 },
  },
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);