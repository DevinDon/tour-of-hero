import { CORSHandler, Rester } from '@rester/core';
import { HeroController } from './hero/hero.controller';

const rester = new Rester()
  .configControllers
  .add(HeroController)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
