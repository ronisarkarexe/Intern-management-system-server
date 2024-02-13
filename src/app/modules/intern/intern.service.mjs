import mongoose from 'mongoose';
import { Department } from '../department/department.model.mjs';
import { Intern } from './intern.module.mjs';
import paginationHelper from '../../../utils/paginationHelper.mjs';
import bcrypt from 'bcrypt';
import config from '../../../config/index.mjs';

const createIntern = async (payload) => {
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const department = await Department.findOne({ _id: payload.departmentId });
    payload.password = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds),
    );
    result = await Intern.create(payload);
    department.internDetails.push({ internId: result._id });

    await department.save();
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.commitTransaction();
    await session.endSession();
  }
  if (!result) {
    throw new Error('Intern is not created!');
  }
  return result;
};

const getAllIntern = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const result = await Intern.find()
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .populate('departmentId');
  const total = await Intern.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleIntern = async (id) => {
  const result = await Intern.findOne({ _id: id }).populate('departmentId');
  return result;
};

const updateIntern = async (id, payload) => {
  const result = await Intern.updateOne({ _id: id }, payload);
  return result;
};

const deleteIntern = async (id) => {
  await Intern.deleteOne({ _id: id });
};

export const InternService = {
  createIntern,
  getAllIntern,
  getSingleIntern,
  updateIntern,
  deleteIntern,
};
