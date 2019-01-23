import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';

type Content = number;

export const hero$delete: Middleware = async (c, next) => {
  next();
  const id: number = Number(c.query.id) || -1;
  await Hero.delete({ id });
  c.body = generateResponse<Content>({
    status: {
      message: `Deleted hero, ID: ${id}`
    },
    content: id
  });
};

export default hero$delete;
