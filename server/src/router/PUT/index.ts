import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import hero$update from './hero/update';

export const PUT: RouterPaths = {
  'update hero information': {
    path: '/hero/update',
    ware: hero$update,
    cors: CORS_ALLOW_ALL
  }
};

export default PUT;
