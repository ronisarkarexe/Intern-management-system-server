import express from 'express';
import { AuthController } from './auth.controller.mjs';
const router = express.Router();

router.post('/login', AuthController.login);
router.post('/refresh-token', AuthController.refreshToken);

export const AuthRouters = router;
