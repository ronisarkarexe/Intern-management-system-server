import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { InternService } from './intern.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

const createIntern = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await InternService.createIntern(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Intern created successfully',
    data: result,
  });
});

const getAllIntern = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await InternService.getAllIntern(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Intern retried successfully',
    data: result,
  });
});

const getSingleIntern = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await InternService.getSingleIntern(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Intern retied successfully',
    data: result,
  });
});

const updateIntern = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await InternService.updateIntern(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Intern updated successfully',
    data: result,
  });
});

const deleteIntern = catchAsync(async (req, res) => {
  const id = req.params.id;
  await InternService.deleteIntern(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Intern deleted successfully',
  });
});

export const InternController = {
  createIntern,
  getAllIntern,
  deleteIntern,
  getSingleIntern,
  updateIntern,
};
