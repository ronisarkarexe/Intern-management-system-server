import express from 'express';
import { TaskController } from './task.controller.mjs';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';

const router = express.Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTask);
router.get('/:id', TaskController.getSingleTask);
router.patch(
  '/:id',
  auth(PERMISSION_ROLE.INTERN, PERMISSION_ROLE.ADMIN),
  TaskController.updateTask,
);
router.delete('/:id', TaskController.deleteTask);

export const TaskRouters = router;
