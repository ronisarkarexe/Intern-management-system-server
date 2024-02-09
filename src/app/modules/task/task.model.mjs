import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
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
  internId: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Intern',
    },
  ],
});
