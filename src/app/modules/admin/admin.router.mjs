import express from 'express';
import { AdminController } from './admin.controller.mjs';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';

const router = express.Router();

router.post(
  '/',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  AdminController.createAdmin,
);

router.get(
  '/',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  AdminController.getAllData,
);

router.get(
  '/:id',
  auth(
    PERMISSION_ROLE.ADMIN,
    PERMISSION_ROLE.SUPER_ADMIN,
    PERMISSION_ROLE.INTERN,
  ),
  AdminController.getSingleData,
);

router.patch(
  '/:id',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  AdminController.updateAdmin,
);

router.delete(
  '/:id',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  AdminController.deleteAdmin,
);

export const AdminRouters = router;
