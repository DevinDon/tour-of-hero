import { Controller, Inject, PathVariable, POST, RequestBody, HTTP400Exception, GET } from '@rester/core';
import { BaseResponse, response } from '../model/response.model';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('/comment')
export class CommentController {

  @Inject()
  private service!: CommentService;

  @POST('/add')
  async add(@RequestBody() comment: Comment): Promise<BaseResponse<Comment>> {
    comment.id = undefined as any;
    comment.date = Date.now();
    comment.dislike = 0;
    comment.like = 0;
    if (!comment.belong || !comment.content) {
      throw new HTTP400Exception('field belong & content is required');
    }
    const result = await this.service.add(comment);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/hero/{{belong}}/{{offset}}')
  async getAboutHero(@PathVariable('belong') belong: number, @PathVariable('offset') offset: number): Promise<BaseResponse<Comment[]>> {
    return response({
      status: true,
      content: await this.service.getAboutHero(+belong, +offset)
    });
  }

  @GET('/origin/{{id}}')
  async getReplyOrigin(@PathVariable('id') id: number): Promise<BaseResponse<Comment[]>> {
    return response({
      status: true,
      content: await this.service.getReplyOrigin(+id)
    });
  }

  @POST('/like/{{id}}')
  async like(@PathVariable('id') id: number): Promise<BaseResponse<number>> {
    const result = await this.service.like(+id);
    return response({
      status: result !== -1,
      content: result
    });
  }

}
