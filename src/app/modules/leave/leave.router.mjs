import express from 'express';
import { LeaveController } from './leave.controller.mjs';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';

const router = express.Router();

router.post('/', auth(PERMISSION_ROLE.INTERN), LeaveController.createLeave);
router.get(
  '/',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.INTERN),
  LeaveController.getAllLeave,
);
router.get(
  '/:id',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.INTERN),
  LeaveController.getSingleLeave,
);
router.patch('/:id', auth(PERMISSION_ROLE.ADMIN), LeaveController.updateLeave);
router.delete(
  '/:id',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.INTERN),
  LeaveController.deleteLeave,
);

export const LeaveRouters = router;
