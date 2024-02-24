import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError.mjs';
import { Admin } from '../admin/admin.model.mjs';
import { Intern } from '../intern/intern.module.mjs';

const profile = async (payload) => {
  let isExistUser = null;
  if (payload.role === 'ADMIN') {
    isExistUser = await Admin.findOne({ email: payload.email }).select(
      '-password',
    );
  }
  if (payload.role === 'INTERN') {
    isExistUser = await Intern.findOne({ email: payload.email })
      .select('-password')
      .populate('departmentId')
      .populate('tasks.taskId')
      .populate('salaries.salaryId');
  }
  if (!isExistUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Please enter valid email!');
  }
  return isExistUser;
};

export const ProfileService = {
  profile,
};
