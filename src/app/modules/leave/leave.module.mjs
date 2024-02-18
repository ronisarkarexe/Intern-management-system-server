import mongoose from 'mongoose';

const leaveSchema = mongoose.Schema(
  {
    reason: {
      type: String,
      required: true,
      unique: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Approved', 'Rejected'],
    },
    appliedDate: {
      type: String,
      required: true,
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

export const Leave = mongoose.model('Leave', leaveSchema);
