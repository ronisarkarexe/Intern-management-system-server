import express from 'express';
import { InternController } from './intern.controller.mjs';
const router = express.Router();

router.post('/', InternController.createIntern);
router.get('/', InternController.getAllIntern);

router.get('/:id', InternController.getSingleIntern);
router.patch('/:id', InternController.updateIntern);
router.delete('/:id', InternController.deleteIntern);

export const InternRouters = router;
