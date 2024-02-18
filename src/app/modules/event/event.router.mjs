import express from 'express';
import { EventController } from './event.controller.mjs';

const router = express.Router();

router.post('/', EventController.createEvent);
router.get('/', EventController.getAllEvent);
router.get('/:id', EventController.getSingleEvent);
router.patch('/:id', EventController.updateEvent);
router.delete('/:id', EventController.deleteEvent);

export const EventRouters = router;
