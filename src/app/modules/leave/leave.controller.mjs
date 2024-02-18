import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { LeaveService } from './leave.service.mjs';

const createLeave = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await LeaveService.createLeave(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Applied for leave successfully!',
    data: result,
  });
});

export const LeaveController = {
  createLeave,
};
