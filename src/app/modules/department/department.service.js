const Department = require("./department.model");

const createDepartmentDb = async (payload) => {
  const result = await Department.create(payload);
  return result;
};

const getAllDataDb = async () => {
  const result = await Department.find({});
  return result;
};

module.exports = {
  createDepartmentDb,
  getAllDataDb
};
