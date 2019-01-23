import { RouterPaths } from 'koa-backend-server';
import hero from './hero';


export const GET: RouterPaths = {
  'get hero by id': {
    path: '/hero',
    ware: hero
  }
};

export default GET;
