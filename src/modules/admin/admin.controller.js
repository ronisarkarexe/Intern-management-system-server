const { createAdminDb, getAllDataDb } = require("./admin.service");

const createAdmin = async (req, res) => {
  const data = req.body;
  const result = await createAdminDb(data);
  res.status(200).json({
    message: "Admin created successfully",
    data: result,
  });
};

const getAllData = async (req, res) => {
  const result = await getAllDataDb();
  res.status(200).json({
    message: "Admin retried successfully",
    data: result,
  });
};

module.exports = { createAdmin, getAllData };
