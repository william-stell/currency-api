import express from 'express';
import { ratesGet } from '../controllers/ratesController.js';

const router = express.Router();

router.get('/rates/:base', ratesGet);

export default router;