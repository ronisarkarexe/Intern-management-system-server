import mongoose from 'mongoose';
import { Department } from './department.model.mjs';
import { Admin } from '../admin/admin.model.mjs';

const createDepartmentDb = async (payload) => {
  const result = await Department.create(payload);
  return result;
};

const getAllDataDb = async () => {
  const result = await Department.find({}).populate('adminDetails.adminId');
  return result;
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
