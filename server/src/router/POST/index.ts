import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import hero$add from './hero/add';

/** All POST router. */
export const POST: RouterPaths = {
  'add new hero': {
    path: '/hero/add',
    ware: hero$add,
    cors: CORS_ALLOW_ALL
  }
};

export default POST;
