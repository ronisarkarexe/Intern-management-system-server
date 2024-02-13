import express from 'express';
import { InternController } from './intern.controller.mjs';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';
const router = express.Router();

router.post(
  '/',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  InternController.createIntern,
);

router.get(
  '/',
  auth(
    PERMISSION_ROLE.ADMIN,
    PERMISSION_ROLE.INTERN,
    PERMISSION_ROLE.SUPER_ADMIN,
  ),
  InternController.getAllIntern,
);

router.get(
  '/:id',
  auth(
    PERMISSION_ROLE.ADMIN,
    PERMISSION_ROLE.INTERN,
    PERMISSION_ROLE.SUPER_ADMIN,
  ),
  InternController.getSingleIntern,
);

router.patch(
  '/:id',
  auth(
    PERMISSION_ROLE.ADMIN,
    PERMISSION_ROLE.SUPER_ADMIN,
    PERMISSION_ROLE.INTERN,
  ),
  InternController.updateIntern,
);

router.delete(
  '/:id',
  auth(PERMISSION_ROLE.ADMIN, PERMISSION_ROLE.SUPER_ADMIN),
  InternController.deleteIntern,
);

export const InternRouters = router;
