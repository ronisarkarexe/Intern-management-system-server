import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Task } from './task.model.mjs';

const createTask = async (payload) => {
  const result = await Task.create(payload);
  return result;
};

const getAllTask = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Task.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
  const total = await Task.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleTask = async (id) => {
  const result = await Task.findOne({ _id: id });
  return result;
};

const updateTask = async (id, payload) => {
  const result = await Task.updateOne({ _id: id }, payload);
  return result;
};

const deleteTask = async (id) => {
  await Task.deleteOne({ _id: id });
};

export const TaskService = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
