import express from 'express';
import { hello } from './hello';



const routes = express.Router();

routes.route('/hello').get(hello); 



export default routes;
