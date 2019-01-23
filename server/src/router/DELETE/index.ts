import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import hero$delete from './hero/delete';

export const DELETE: RouterPaths = {
  'delete hero by ID': {
    path: '/hero/delete',
    ware: hero$delete,
    cors: CORS_ALLOW_ALL
  }
};

export default DELETE;
