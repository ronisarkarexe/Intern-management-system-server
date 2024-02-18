import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { EventService } from './event.service.mjs';
import pick from '../../../shared/pick.mjs';
import { paginationFields } from '../../../utils/pagination.mjs';

const createEvent = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await EventService.createEvent(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event created successfully!',
    data: result,
  });
});

const getAllEvent = catchAsync(async (req, res) => {
  const options = pick(req.query, paginationFields);
  const result = await EventService.getAllEvent(options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retried successfully',
    data: result,
  });
});

const getSingleEvent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await EventService.getSingleEvent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retied successfully',
    data: result,
  });
});

const updateEvent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await EventService.updateEvent(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event updated successfully',
    data: result,
  });
});

const deleteEvent = catchAsync(async (req, res) => {
  const id = req.params.id;
  await EventService.deleteEvent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event deleted successfully',
  });
});

export const EventController = {
  createEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
