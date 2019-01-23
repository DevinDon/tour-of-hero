import { Middleware } from 'koa';
import Hero from '../../entity/hero.entity';
import { generateResponse } from '../config';

export const hero: Middleware = async (c, next) => {
  const id: number = Number(c.request.query.id) || -1;
  c.body = generateResponse<Hero>(await Hero.findOne(id));
  await next();
};

export default hero;
