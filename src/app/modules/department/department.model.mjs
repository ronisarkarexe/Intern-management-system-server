import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
      unique: true,
    },
    internDetails: [
      {
        internId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Intern',
        },
      },
    ],
    adminDetails: [
      {
        adminId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Admin',
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Department = mongoose.model('Department', departmentSchema);
