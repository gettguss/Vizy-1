import express from 'express';
import { getMissedClockIns, sendNotification } from '../controllers/employeeController.js';

export const router = express.Router();

router.get('/missed-clockins', getMissedClockIns);
router.post('/send-notification', sendNotification);