import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Leave } from './leave.module.mjs';

const createLeave = async (payload) => {
  const result = await Leave.create(payload);
  return result;
};

const getAllLeave = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Leave.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .populate('internId')
    .populate('departmentId');
  const total = await Leave.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleLeave = async (id) => {
  const result = await Leave.findOne({ _id: id });
  return result;
};

const updateLeave = async (id, payload) => {
  const result = await Leave.updateOne({ _id: id }, payload);
  return result;
};

const deleteLeave = async (id) => {
  await Leave.deleteOne({ _id: id });
};

export const LeaveService = {
  createLeave,
  getAllLeave,
  getSingleLeave,
  updateLeave,
  deleteLeave,
};
