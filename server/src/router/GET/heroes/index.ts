import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';

type Request = Partial<Hero>;
type Content = Partial<Hero>[];

export const heroes: Middleware = async (c, next) => {
  next();
  const request: Request = {
    name: c.query.name
  };
  let content;
  if (request.name) {
    content = await Hero.find({ where: `"name" LIKE '%${request.name}%'`, order: { id: 'ASC' } });
  } else {
    content = await Hero.find({ take: 100, order: { id: 'ASC' } });
  }
  c.body = generateResponse<Content>({ content });
};

export default heroes;
