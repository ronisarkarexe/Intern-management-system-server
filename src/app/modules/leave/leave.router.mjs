import express from 'express';
import { LeaveController } from './leave.controller.mjs';

const router = express.Router();

router.post('/', LeaveController.createLeave);
router.get('/', LeaveController.getAllLeave);
router.get('/:id', LeaveController.getSingleLeave);
router.patch('/:id', LeaveController.updateLeave);
router.delete('/:id', LeaveController.deleteLeave);

export const LeaveRouters = router;
