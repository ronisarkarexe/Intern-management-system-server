import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { TaskService } from './task.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

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



const getAllTask = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await TaskService.getAllTask(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task retried successfully',
    data: result,
  });
});

const getSingleTask = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await TaskService.getSingleTask(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task retied successfully',
    data: result,
  });
});

const updateTask = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await TaskService.updateTask(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  });
});

const deleteTask = catchAsync(async (req, res) => {
  const id = req.params.id;
  await TaskService.deleteTask(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
  });
});


export const TaskController = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask
};
