import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    assignDate: {
      type: String,
      required: true,
    },
    deadlineDate: {
      type: String,
      required: true,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    internId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Intern',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Task = mongoose.model('Task', taskSchema);
