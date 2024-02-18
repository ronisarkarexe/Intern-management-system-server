import express from 'express';
import { LeaveController } from './leave.controller.mjs';

const router = express.Router();

router.post('/', LeaveController.createLeave);

export const LeaveRouters = router;
