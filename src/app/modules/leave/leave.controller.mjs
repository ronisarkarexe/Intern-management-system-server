import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { LeaveService } from './leave.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

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

const getAllLeave = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await LeaveService.getAllLeave(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Leave retried successfully',
    data: result,
  });
});

const getSingleLeave = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await LeaveService.getSingleLeave(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Leave retied successfully',
    data: result,
  });
});

const updateLeave = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await LeaveService.updateLeave(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Leave updated successfully',
    data: result,
  });
});

const deleteLeave = catchAsync(async (req, res) => {
  const id = req.params.id;
  await LeaveService.deleteLeave(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Leave deleted successfully',
  });
});

export const LeaveController = {
  createLeave,
  getAllLeave,
  getSingleLeave,
  updateLeave,
  deleteLeave,
};
