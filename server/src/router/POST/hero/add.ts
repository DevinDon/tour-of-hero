import { Middleware } from 'koa';
import Hero from '../../../entity/hero.entity';
import { generateResponse } from '../../function';
import 'koa-body';
type Request = Partial<Hero>;
type Content = Partial<Hero>;

export const hero$add: Middleware = async (c, next) => {
  next();
  const request: Request = {
    name: c.request.body.name
  };
  if (request.name) {
    const result = await Hero.insert(request);
    c.body = generateResponse<Content>({
      status: {
        message: `Added a new hero, ID: ${result.identifiers[0] && result.identifiers[0].id}`
      },
      content: {
        id: result.identifiers[0] && result.identifiers[0].id,
        name: request.name
      }
    });
  } else {
    c.body = generateResponse<Content>({
      status: {
        message: `Invalid hero information.`
      }
    });
  }
};

export default hero$add;
