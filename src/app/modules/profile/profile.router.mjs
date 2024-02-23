import express from 'express';
import auth from '../../middlewares/auth.mjs';
import PERMISSION_ROLE from '../../../permission-role/role.mjs';
import { ProfileController } from './profile.controller.mjs';
const router = express.Router();

router.get(
  '/',
  auth(
    PERMISSION_ROLE.ADMIN,
    PERMISSION_ROLE.SUPER_ADMIN,
    PERMISSION_ROLE.INTERN,
  ),
  ProfileController.profile,
);

export const ProfileRouters = router;
