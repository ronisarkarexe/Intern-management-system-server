import mongoose from 'mongoose';
import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Task } from './task.model.mjs';
import { Intern } from '../intern/intern.module.mjs';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError.mjs';

const createTask = async (payload) => {
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const user = await Intern.findOne({ _id: payload.internId });
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Intern not found!');
    }
    result = await Task.create(payload);
    user.tasks.push({ taskId: result._id });
    await user.save();
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create task');
  }
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
    .limit(limit)
    .populate('internId')
    .populate('departmentId');
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

// const extendedDate = async (id, payload) => {
//   const result = await Task.updateOne({ _id: id }, payload);
//   return result;
// };

export const TaskService = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
