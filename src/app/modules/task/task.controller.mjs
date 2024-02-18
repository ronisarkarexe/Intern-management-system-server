import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { TaskService } from './task.service.mjs';

const createTask = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await TaskService.createTask(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task added successfully!',
    data: result,
  });
});

export const TaskController = {
  createTask,
};
