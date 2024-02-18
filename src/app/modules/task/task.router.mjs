import express from 'express';
import { TaskController } from './task.controller.mjs';

const router = express.Router();

router.post('/', TaskController.createTask);

export const TaskRouters = router;
