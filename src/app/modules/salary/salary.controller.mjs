import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { SalaryService } from './salary.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

const createSalary = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await SalaryService.createSalary(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Salary added successfully!',
    data: result,
  });
});



const getAllSalary = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await SalaryService.getAllSalary(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Salary retried successfully',
    data: result,
  });
});

const getSingleSalary = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await SalaryService.getSingleSalary(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Salary retied successfully',
    data: result,
  });
});

const updateSalary = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await SalaryService.updateSalary(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Salary updated successfully',
    data: result,
  });
});

const deleteSalary = catchAsync(async (req, res) => {
  const id = req.params.id;
  await SalaryService.deleteSalary(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Salary deleted successfully',
  });
});


export const SalaryController = {
  createSalary,
  getAllSalary,
  getSingleSalary,
  updateSalary,
  deleteSalary
};
