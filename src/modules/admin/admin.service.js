const Admin = require("./admin.model");

const createAdminDb = async (data) => {
  const result = await Admin.create(data);
  return result;
};

const getAllDataDb = async () => {
  const result = await Admin.find({});
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

module.exports = {
  createAdminDb,
  getAllDataDb,
  getSingleDataDb,
  updateAdminDb,
  deleteAdminDb,
};
