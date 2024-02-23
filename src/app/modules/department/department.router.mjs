import express from 'express';
import { DepartmentController } from './department.controller.mjs';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';
const router = express.Router();

router.post(
  '/',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  DepartmentController.createDepartment,
);

router.get(
  '/',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN, PERMISSION_ROLE.INTERN),
  DepartmentController.getAllData,
);

router.delete(
  '/:id',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  DepartmentController.deleteDepartment,
);

router.post(
  '/:id/assign-admin',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  DepartmentController.assignAdmin,
);

export const DepartmentRouters = router;
