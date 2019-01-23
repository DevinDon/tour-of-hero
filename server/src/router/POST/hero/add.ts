import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';

type Request = Partial<Hero>;
type Content = string;

export const hero$add: Middleware = async (c, next) => {
  next();
  const request: Request = {
    name: c.request.body.name
  };
  const result = await Hero.insert(request);
  c.body = generateResponse<Content>({
    content: `Added a new hero, ID: ${result.identifiers[0] && result.identifiers[0].id}`
  });
};

export default hero$add;
