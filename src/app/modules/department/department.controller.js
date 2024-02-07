const { createDepartmentDb, getAllDataDb } = require("./department.service");

const createDepartment = async (req, res) => {
  const data = req.body;
  const result = await createDepartmentDb(data);
  res.status(200).json({
    message: "Department created successfully",
    data: result,
  });
};

const getAllData = async (req, res) => {
  const result = await getAllDataDb();
  res.status(200).json({
    message: "Department retried successfully",
    data: result,
  });
};

module.exports = { createDepartment, getAllData };
