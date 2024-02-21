import mongoose from 'mongoose';
import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Salary } from './Salary.module.mjs';
import ApiError from '../../../errors/ApiError.mjs';
import httpStatus from 'http-status';
import { Intern } from '../intern/intern.module.mjs';

const createSalary = async (payload) => {
  let user = await Intern.findOne({ _id: payload.internId });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Intern not found!');
  }

  const isExistSalaryMonth = await Salary.find({
    month: payload.month,
    internId: payload.internId,
  });
  if (isExistSalaryMonth[0]) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      `Already added salary at this ${payload.month} month`,
    );
  }
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    result = await Salary.create(payload);
    user.salaries.push({ salaryId: result._id });
    await user.save();
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
  if (!result) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Unable to create salary for this intern',
    );
  }
  return result;
};

const getAllSalary = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Salary.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .populate('internId')
    .populate('departmentId');
  const total = await Salary.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleSalary = async (id) => {
  const result = await Salary.findOne({ _id: id });
  return result;
};

const updateSalary = async (id, payload) => {
  const result = await Salary.updateOne({ _id: id }, payload);
  return result;
};

const deleteSalary = async (id) => {
  await Salary.deleteOne({ _id: id });
};

export const SalaryService = {
  createSalary,
  getAllSalary,
  getSingleSalary,
  updateSalary,
  deleteSalary,
};
