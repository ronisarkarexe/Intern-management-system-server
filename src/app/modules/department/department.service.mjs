import mongoose from 'mongoose';
import { Department } from './department.model.mjs';
import { Admin } from '../admin/admin.model.mjs';
import paginationHelper from '../../../utils/paginationHelper.mjs';

const createDepartmentDb = async (payload) => {
  const result = await Department.create(payload);
  return result;
};

const getAllDataDb = async (options) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(options);
  const sortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }
  const result = await Department.find({})
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
    .populate('adminDetails.adminId');
  const total = await Department.countDocuments({});
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const deleteDepartment = async (id) => {
  await Department.deleteOne({ _id: id });
};

const assignAdmin = async (id, payload) => {
  let department = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    department = await Department.findOne({ _id: id });
    if (!department) {
      throw new Error('Department is not found!');
    }
    console.log('department', department);
    department.adminDetails.push({ adminId: payload.admin });
    await department.save();

    const admin = await Admin.findOne({ _id: payload.admin });
    console.log('admin', admin);
    if (!admin) {
      throw new Error('Admin is not found!');
    }
    admin.departmentId = id;
    await admin.save();
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.commitTransaction();
    await session.endSession();
  }
  if (!department) {
    throw new Error('Department is not created!');
  }
  return department;
};

export const DepartmentService = {
  createDepartmentDb,
  getAllDataDb,
  deleteDepartment,
  assignAdmin,
};
