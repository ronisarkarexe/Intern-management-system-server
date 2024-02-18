import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Salary } from './Salary.module.mjs';

const createSalary = async (payload) => {
  const result = await Salary.create(payload);
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
    .limit(limit);
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
  deleteSalary
};
