import { Salary } from './Salary.module.mjs';

const createSalary = async (payload) => {
  const result = await Salary.create(payload);
  return result;
};

export const SalaryService = {
  createSalary,
};
