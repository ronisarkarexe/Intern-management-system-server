import express from 'express';
import { TaskController } from './task.controller.mjs';

const router = express.Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTask);
router.get('/:id', TaskController.getSingleTask);
router.patch('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);


export const TaskRouters = router;
