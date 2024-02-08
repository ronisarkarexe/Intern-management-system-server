import mongoose from 'mongoose';
import { Admin } from './admin.model.mjs';
import { Department } from '../department/department.model.mjs';

const createAdminDb = async (payload) => {
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const existingAdmin = await Admin.findOne({
      departmentId: { _id: payload.departmentId },
    });

    if (existingAdmin) {
      throw new Error(
        'An admin with this email already exists in the specified department.',
      );
    }

    const department = await Department.findOne({ _id: payload.departmentId });
    if (!department) {
      throw new Error('Department is not found!');
    }
    result = await Admin.create(payload);
    department.adminDetails.push({ adminId: result._id });
    await department.save();
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.commitTransaction();
    await session.endSession();
  }

  if (!result) {
    throw new Error('Admin is not created!');
  }
  return result;
};

const getAllDataDb = async () => {
  const result = await Admin.find({}).populate('departmentId');
  return result;
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
  const result = await Admin.deleteOne({ _id: id });
  return result;
};

export const AdminService = {
  createAdminDb,
  getAllDataDb,
  getSingleDataDb,
  updateAdminDb,
  deleteAdminDb,
};
