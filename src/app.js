import express from 'express';
import rootRoute from './routes/rootRoute.js';
import currenciesRoute from './routes/currenciesRoute.js';
import statusRoute from './routes/statusRoute.js';
import ratesRoute from './routes/ratesRoute.js';

const app = express();
app.use(express.json());

app.use('/', rootRoute);
app.use('/', currenciesRoute);
app.use('/', statusRoute);
app.use('/', ratesRoute);

export default app;