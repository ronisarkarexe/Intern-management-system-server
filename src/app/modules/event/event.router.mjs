import express from 'express';
import { EventController } from './event.controller.mjs';

const router = express.Router();

router.post('/', EventController.createEvent);

export const EventRouters = router;
