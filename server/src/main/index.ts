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
  .setHost('t-1.don.red')
  .setPort(5432)
  .setDatabase('shared')
  .setUsername('shared')
  .setPassword('shared')
  .setEntities([HeroEntity])
  .setLogging(true)
  .setSynchronize(true)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
