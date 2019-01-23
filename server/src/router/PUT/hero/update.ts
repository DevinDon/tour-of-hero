import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';

type Request = Partial<Hero>;
type Content = string;

export const hero$update: Middleware = async (c, next) => {
  next();
  const request: Request = {
    id: c.request.body.id,
    name: c.request.body.name
  };
  await Hero.update({ id: request.id }, request);
  c.body = generateResponse<Content>({
    content: 'Update successfully.'
  });
};

export default hero$update;
