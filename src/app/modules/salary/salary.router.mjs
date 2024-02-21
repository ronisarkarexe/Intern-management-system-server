import express from 'express';
import { SalaryController } from './salary.controller.mjs';

const router = express.Router();

router.post('/', SalaryController.createSalary);
router.get('/', SalaryController.getAllSalary);
router.get('/:id', SalaryController.getSingleSalary);
router.patch('/:id', SalaryController.updateSalary);
router.delete('/:id', SalaryController.deleteSalary);

export const SalaryRouters = router;
