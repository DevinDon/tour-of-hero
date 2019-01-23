import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';

type Request = Partial<Hero>;
type Content = Partial<Hero>;

export const hero: Middleware = async (c, next) => {
  next();
  const request: Request = {
    id: Number(c.query.id),
    name: c.query.name
  };
  let content;
  if (request.id && request.name) {
    content = await Hero.findOne(request);
  } else if (request.id) {
    content = await Hero.findOne(request.id);
  } else if (request.name) {
    content = await Hero.findOne(request.name);
  } else {
    content = undefined;
  }
  c.body = generateResponse<Content>({ content });
};

export default hero;
