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
    status: {
      type: String,
      enum: ['TODO', 'IN_PROGRESS', 'DONE'],
      default: 'TODO',
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
    isExtendDeadlineDate: {
      type: Boolean,
      default: false,
    },
    reason: {
      type: String,
      default: '',
    },
    extendedDate: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

export const Task = mongoose.model('Task', taskSchema);
