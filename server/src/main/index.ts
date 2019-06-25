import { Rester } from '@rester/core';
import { HeroController } from './hero/hero.controller';
import { HeroEntity } from './hero/hero.entity';
import { CORSHandler } from './handler/cors.handler';

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
  .setType('postgres')
  .setHost('tour-of-heroes-database')
  .setPort(5432)
  .setDatabase('tour-of-heroes')
  .setUsername('tour-of-heroes')
  .setPassword('tour-of-heroes')
  .setEntities([HeroEntity])
  .setLogging(true)
  .setSynchronize(true)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
