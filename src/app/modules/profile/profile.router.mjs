import express from 'express';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';
import { ProfileController } from './profile.controller.mjs';
const router = express.Router();

router.post(
  '/',
  auth(
    PERMISSION_ROLE.ADMIN,
    PERMISSION_ROLE.INTERN,
    PERMISSION_ROLE.SUPER_ADMIN,
  ),
  ProfileController.profile,
);

export const ProfileRouters = router;
