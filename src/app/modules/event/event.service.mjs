import { Event } from './Event.module.mjs';

const createEvent = async (payload) => {
  const result = await Event.create(payload);
  return result;
};

export const EventService = {
  createEvent,
};
