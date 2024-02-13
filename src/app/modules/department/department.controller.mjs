import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { DepartmentService } from './department.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

const createDepartment = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await DepartmentService.createDepartmentDb(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await DepartmentService.getAllDataDb(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department retried successfully',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  await DepartmentService.deleteDepartment(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department deleted successfully',
  });
});

const assignAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await DepartmentService.assignAdmin(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Assign admin to department successfully!',
    data: result,
  });
});

export const DepartmentController = {
  createDepartment,
  getAllData,
  deleteDepartment,
  assignAdmin,
};
