import { Server } from 'koa-backend-server';
import PATH from './router';
import { statistic } from './ware';

const server = new Server({
  router: {
    paths: PATH,
    version: 'v1'
  }
});
server.use(statistic);

server.listen();
