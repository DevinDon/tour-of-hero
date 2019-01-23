import { CORS_ALLOW_ALL, RouterPaths } from 'koa-backend-server';
import hero from './hero';
import heroes from './heroes';


export const GET: RouterPaths = {
  'get hero by ID': {
    path: '/hero',
    ware: hero,
    cors: CORS_ALLOW_ALL
  },
  'get all heroes, limit 100': {
    path: '/heroes',
    ware: heroes,
    cors: CORS_ALLOW_ALL
  }
};

export default GET;
