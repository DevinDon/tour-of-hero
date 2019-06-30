import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.model';
import { BaseResponse } from '../model/base.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private app: AppService,
    private http: HttpClient
  ) { }

  add(comment: Pick<Comment, 'belong' | 'content' | 'reply'>) {
    return this.http
      .post<BaseResponse<Comment>>(AppService.API + '/comment/add', comment);
  }

  getAboutHero(belong: number, offset: number) {
    return this.http
      .get<BaseResponse<Comment[]>>(AppService.API + `/comment/hero/${belong}/${offset}`);
  }

  getAboutReply(reply: number, offset: number) {
    return this.http
      .get<BaseResponse<Comment[]>>(AppService.API + `/comment/${reply}/${offset}`);
  }

}
