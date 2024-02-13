import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.mjs';
import sendResponse from '../../../shared/sendResponse.mjs';
import { ProfileService } from './profile.service.mjs';

const profile = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ProfileService.profile(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '',
    data: result,
  });
});

export const ProfileController = {
  profile,
};
