import express from 'express';
import cors from 'cors';
import routes from './routes';
import './services/db/db.service';

const server = express();

server.use(express.json());
server.use(cors());

server.use(routes);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('App is started');
});
