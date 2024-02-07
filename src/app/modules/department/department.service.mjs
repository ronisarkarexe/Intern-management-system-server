import { Department } from "./department.model.mjs";

const createDepartmentDb = async (payload) => {
  const result = await Department.create(payload);
  return result;
};

const getAllDataDb = async () => {
  const result = await Department.find({});
  return result;
};

const deleteDepartment = async (id) => {
  await Department.deleteOne({ _id: id });
};

export const DepartmentService = {
  createDepartmentDb,
  getAllDataDb,
  deleteDepartment,
};
