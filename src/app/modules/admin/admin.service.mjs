import paginationHelper from '../../../utils/paginationHelper.mjs';
import { Admin } from './admin.model.mjs';
import bcrypt from 'bcrypt';
import config from '../../../config/index.mjs';

const createAdminDb = async (payload) => {
  payload.password = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds),
  );
  const result = await Admin.create(payload);
  return result;
};

const getAllDataDb = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);

  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Admin.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .populate('departmentId');
  const total = await Admin.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleDataDb = async (id) => {
  const result = await Admin.findOne({ _id: id });
  return result;
};

const updateAdminDb = async (id) => {
  const result = await Admin.updateOne({ _id: id });
  return result;
};

const deleteAdminDb = async (id) => {
  await Admin.deleteOne({ _id: id });
};

export const AdminService = {
  createAdminDb,
  getAllDataDb,
  getSingleDataDb,
  updateAdminDb,
  deleteAdminDb,
};
