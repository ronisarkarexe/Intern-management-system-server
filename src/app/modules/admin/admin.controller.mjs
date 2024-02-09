import { AdminService } from './admin.service.mjs';

const createAdmin = async (req, res) => {
  const data = req.body;
  const result = await AdminService.createAdminDb(data);
  res.status(200).json({
    message: 'Admin created successfully',
    data: result,
  });
};

const getAllData = async (req, res) => {
  const result = await AdminService.getAllDataDb();
  res.status(200).json({
    message: 'Admin retried successfully',
    data: result,
  });
};

const getSingleData = async (req, res) => {
  const id = req.params.id;
  const result = await AdminService.getSingleDataDb(id);
  res.status(200).json({
    message: 'Admin created successfully',
    data: result,
  });
};

const updateAdmin = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await AdminService.updateAdminDb(id, data);
  res.status(200).json({
    message: 'Admin retried successfully',
    data: result,
  });
};

const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  const result = await AdminService.deleteAdminDb(id);
  res.status(200).json({
    message: 'Admin retried successfully',
    data: result,
  });
};

export const AdminController = {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAllData,
  getSingleData,
};
