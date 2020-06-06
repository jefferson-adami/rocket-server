import express, { request, response } from 'express';

import PointsController from './controllers/PointsController';
import IntemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new IntemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;
