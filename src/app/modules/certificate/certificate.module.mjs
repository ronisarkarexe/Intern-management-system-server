import mongoose from 'mongoose';

const certificateSchema = mongoose.Schema(
  {
    certificateName: {
      type: String,
      required: true,
    },
    issueDate: {
      type: String,
      required: true,
    },
    certificateImage: {
      type: String,
    },
    internId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Intern',
      required: true,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Certificate = mongoose.model('Certificate', certificateSchema);
