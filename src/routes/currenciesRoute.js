import express from 'express';
import { currenciesGet } from '../controllers/currenciesController.js';

const router = express.Router();

router.get('/currencies', currenciesGet);

export default router;