import express from 'express';
import { AdminController } from './admin.controller.mjs';

const router = express.Router();

router.post('/', AdminController.createAdmin);
router.get('/', AdminController.getAllData);

router.get('/:id', AdminController.getSingleData);
router.patch('/:id', AdminController.updateAdmin);
router.delete('/:id', AdminController.deleteAdmin);

export const AdminRouters = router;
