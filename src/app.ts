import express from 'express';
import config from 'config';
import connect from './utils/connnect';
import log from './utils/logger';
import routes from './routes'

const port = config.get<number>('port') ? config.get<number>('port') : 3000;

const app = express();

app.listen(port, async ()=>{
  log.info(`Server is working on the port ${port}.`);
  await connect();

  routes(app);
})