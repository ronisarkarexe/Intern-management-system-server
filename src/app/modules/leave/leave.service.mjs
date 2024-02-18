import { Leave } from './leave.module.mjs';

const createLeave = async (payload) => {
  const result = await Leave.create(payload);
  return result;
};

export const LeaveService = {
  createLeave,
};
