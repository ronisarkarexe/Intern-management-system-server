import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Event } from './Event.module.mjs';

const createEvent = async (payload) => {
  const result = await Event.create(payload);
  return result;
};

const getAllEvent = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Event.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total = await Event.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleEvent = async (id) => {
  const result = await Event.findOne({ _id: id });
  return result;
};

const updateEvent = async (id, payload) => {
  const result = await Event.updateOne({ _id: id }, payload);
  return result;
};

const deleteEvent = async (id) => {
  await Event.deleteOne({ _id: id });
};

export const EventService = {
  createEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
