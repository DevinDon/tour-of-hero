import { Service } from '@rester/core';
import { HeroEntity } from './hero.entity';
import { Hero } from './hero.model';

@Service()
export class HeroService {

  private liked = 0;
  private commented = 0;

  async add(hero: Hero) {
    const result = await HeroEntity.insert(hero);
    return result.identifiers[0] ? hero : undefined;
  }

  count() {
    return HeroEntity.count();
  }

  delete(id: number) {
    return HeroEntity.delete(id);
  }

  deleteMore(ids: number[]) {
    return HeroEntity.delete(ids);
  }

  get(id: number) {
    return HeroEntity.findOne(id);
  }

  async getLimit(offset: number, limit: number) {
    return await HeroEntity.find({ skip: offset, take: limit, order: { id: 'ASC' } });
  }

  getMore(ids: number[]) {
    return HeroEntity.findByIds(ids, { order: { id: 'ASC' } });
  }

  getTop(total: number) {
    return HeroEntity.find({ order: { like: 'DESC' }, take: total });
  }

  getAll() {
    return HeroEntity.find({ order: { id: 'ASC' } });
  }

  async update(id: number, hero: Hero): Promise<Hero | undefined> {
    if (await HeroEntity.findOne(id)) {
      await HeroEntity.update(id, hero);
      return await HeroEntity.findOne(id);
    }
  }

  async like(id: number): Promise<number | undefined> {
    const hero = await HeroEntity.findOne(id);
    if (hero) {
      hero.like++;
      this.liked++;
      await HeroEntity.update(id, hero);
      return hero.like;
    }
  }

  async comment(id: number, message: string) {
    this.commented++;
  }

  async dashboard() {
    if (this.commented === 0) {
      // this.commented = await HeroEntity
    }
    if (this.liked === 0) {
      this.liked = await HeroEntity.count();
    }
    const total = await HeroEntity.count();
  }

}
