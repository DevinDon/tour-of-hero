import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';

type Content = string;

export const hero$delete: Middleware = async (c, next) => {
  next();
  const id: number = Number(c.query.id) || -1;
  await Hero.delete({ id });
  c.body = generateResponse<Content>({
    content: `Deleted hero, ID: ${id}`
  });
};

export default hero$delete;
