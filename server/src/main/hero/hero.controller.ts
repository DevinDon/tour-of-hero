import { Controller, DELETE, GET, Inject, OPTIONS, PathQuery, PathVariable, POST, PUT, RequestBody } from '@rester/core';
import { BaseResponse, response } from '../model/response.model';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Controller('/')
export class HeroController {

  @Inject()
  private service!: HeroService;

  @OPTIONS('/add')
  addOptions() {
    return '';
  }

  @POST('/add')
  async add(@RequestBody() hero: Hero): Promise<BaseResponse<Hero>> {
    const result = await this.service.add(hero);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @OPTIONS('/delete/{{id}}')
  deleteOptions() {
    return '';
  }

  @DELETE('/delete/{{id}}')
  async delete(@PathVariable('id') id: number): Promise<BaseResponse> {
    const result = await this.service.delete(+id);
    return response({
      status: Boolean(result.affected),
      content: id
    });
  }

  @OPTIONS('/delete/more')
  deleteMoreOptions() {
    return '';
  }

  @DELETE('/delete/more')
  async deleteMore(@PathQuery('ids') ids: string | undefined): Promise<BaseResponse<number>> {
    if (ids) {
      const arr: number[] = ids.split(',').map(v => +v);
      const result = await this.service.deleteMore(arr);
      return response({
        status: true,
        content: result.affected
      });
    } else {
      return response({ status: false, message: 'Please tell me who you want to delete.' });
    }
  }

  @GET('/get/{{id}}')
  async get(@PathVariable('id') id: number) {
    const hero = await this.service.get(+id);
    return response({
      status: Boolean(hero),
      content: hero
    });
  }

  @GET('/get/{{offset}}/limit/{{limit}}')
  async getLimit(@PathVariable('offset') offset: number, @PathVariable('limit') limit: number) {
    return response({
      status: true,
      content: await this.service.getLimit(+offset < 0 ? 0 : +offset, +limit < 0 ? 10 : +limit)
    });
  }

  @GET('/get/more')
  async getMore(@PathQuery('ids') ids: string | undefined) {
    if (ids) {
      const arr: number[] = ids.split(',').map(v => +v);
      const result = await this.service.getMore(arr);
      return response({
        status: true,
        content: result
      });
    } else {
      return response({
        status: false,
        message: 'Please tell me who you want to know.'
      });
    }
  }

  @GET('/get/top')
  @GET('/get/top/{{total}}')
  async getTop(@PathVariable('total') total: number = 5) {
    const result = await this.service.getTop(total);
    return response({
      status: true,
      content: result
    });
  }

  @GET('/get/all')
  async getAll() {
    const result = await this.service.getAll();
    return response({
      status: true,
      content: result
    });
  }

  @OPTIONS('/update/{{id}}')
  updateOneOptions() {
    return '';
  }

  @PUT('/update/{{id}}')
  async updateOne(@PathVariable('id') id: number, @RequestBody() hero: Hero) {
    const result = await this.service.update(+id, hero);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @POST('/like/{{id}}')
  async like(@PathVariable('id') id: number) {
    const result = await this.service.like(+id);
    return response({
      status: Boolean(result),
      content: result
    });
  }

}
