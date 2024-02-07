const {
  createAdminDb,
  getAllDataDb,
  getSingleDataDb,
  updateAdminDb,
  deleteAdminDb,
} = require("./admin.service");

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

const getSingleData = async (req, res) => {
  const id = req.params.id;
  const result = await getSingleDataDb(id);
  res.status(200).json({
    message: "Admin created successfully",
    data: result,
  });
};

const updateAdmin = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await updateAdminDb(id, data);
  res.status(200).json({
    message: "Admin retried successfully",
    data: result,
  });
};

const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  const result = await deleteAdminDb(id);
  res.status(200).json({
    message: "Admin retried successfully",
    data: result,
  });
};

module.exports = { createAdmin, getAllData, getSingleData, updateAdmin, deleteAdmin };
