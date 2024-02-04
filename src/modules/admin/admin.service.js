const Admin = require("./admin.model");

const createAdminDb = async (data) => {
  const result = await Admin.create(data);
  return result;
};

const getAllDataDb = async () => {
  const result = await Admin.find({});
  return result;
};

module.exports = { createAdminDb, getAllDataDb };
