import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { EventService } from './event.service.mjs';

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

export const EventController = {
  createEvent,
};
