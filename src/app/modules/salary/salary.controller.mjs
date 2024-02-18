import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { SalaryService } from './salary.service.mjs';

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

export const SalaryController = {
  createSalary,
};
