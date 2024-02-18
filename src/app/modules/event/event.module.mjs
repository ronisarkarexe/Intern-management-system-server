import mongoose from 'mongoose';

const eventSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    registrationLink: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    eventImage: {
      type: String,
    }
  },
  {
    timestamps: true,
  },
);

export const Event = mongoose.model('Event', eventSchema);
