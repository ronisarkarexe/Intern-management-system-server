import { Admin } from './admin.model.mjs';

const createAdminDb = async (payload) => {
  const result = await Admin.create(payload);
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
