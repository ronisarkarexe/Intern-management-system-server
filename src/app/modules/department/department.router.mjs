import express from 'express';
import { DepartmentController } from './department.controller.mjs';
const router = express.Router();

router.post('/', DepartmentController.createDepartment);
router.get('/', DepartmentController.getAllData);

router.delete('/:id', DepartmentController.deleteDepartment);

router.post('/:id/assign-admin', DepartmentController.assignAdmin);

export const DepartmentRouters = router;
