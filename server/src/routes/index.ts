import express from 'express';
import { hello } from './hello';
import '../services/db/db.service';

const routes = express.Router();

routes.route('/hello').get(hello); 

export default routes;
