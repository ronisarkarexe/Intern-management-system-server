import { Task } from './task.model.mjs';

const createTask = async (payload) => {
  const result = await Task.create(payload);
  return result;
};

export const TaskService = {
  createTask,
};
