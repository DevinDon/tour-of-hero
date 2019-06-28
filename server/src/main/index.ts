import { CORSHandler, Rester } from '@rester/core';
import { HeroController } from './hero/hero.controller';
import { HeroEntity } from './hero/hero.entity';

const rester = new Rester()
  .configAddress
  .setHost('0.0.0.0')
  .setPort(8080)
  .setProxy(true)
  .end()
  .configControllers
  .add(HeroController)
  .end()
  .configDatabase
  .setType('sqlite')
  .setDatabase('sqlite.db')
  .setEntities([HeroEntity])
  .setLogging(true)
  .setSynchronize(true)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
