import express from 'express';
import { statusGet } from '../controllers/statusController.js';

const router = express.Router();

router.get('/status', statusGet);

export default router;