import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { AdminService } from './admin.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

const createAdmin = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await AdminService.createAdminDb(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully!',
    data: result,
  });
});

const getAllData = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllDataDb(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin retried successfully',
    data: result,
  });
});

const getSingleData = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AdminService.getSingleDataDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin retried successfully',
    data: result,
  });
});

const updateAdmin = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await AdminService.updateAdminDb(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin updated successfully!',
    data: result,
  });
});

const deleteAdmin = catchAsync(async (req, res) => {
  const id = req.params.id;
  await AdminService.deleteAdminDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin deleted successfully!',
  });
});

export const AdminController = {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAllData,
  getSingleData,
};
