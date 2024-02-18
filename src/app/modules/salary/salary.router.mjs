import express from 'express';
import { SalaryController } from './salary.controller.mjs';

const router = express.Router();

router.post('/', SalaryController.createSalary);

export const SalaryRouters = router;
