import mongoose from 'mongoose';

const internSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'INTERN',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    joinDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    collageName: {
      type: String,
      required: true,
    },
    changePassword: {
      type: Boolean,
      default: true,
    },
    isInternshipCompleted: {
      type: Boolean,
      default: false,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    tasks: [
      {
        taskId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Task',
        },
      },
    ],
    salaries: [
      {
        salaryId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Salary',
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Intern = mongoose.model('Intern', internSchema);
