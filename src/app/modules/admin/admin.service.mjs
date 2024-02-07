import { Admin } from "./admin.model.mjs";

const createAdminDb = async (data) => {
  const existingAdmin = await Admin.findOne({
    departmentId: { _id: data.departmentId },
  });

  if (existingAdmin) {
    throw new Error(
      "An admin with this email already exists in the specified department."
    );
  }
  const result = await Admin.create(data);
  return result;
};

const getAllDataDb = async () => {
  const result = await Admin.find({}).populate("departmentId");
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
