import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Department = mongoose.model("Department", departmentSchema);
