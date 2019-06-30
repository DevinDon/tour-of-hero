import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { BaseResponse } from '../model/base.model';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private API$COMMENT: string;

  constructor(
    private http: HttpClient
  ) {
    this.API$COMMENT = AppService.API + '/comment';
  }

  add(comment: Pick<Comment, 'belong' | 'content' | 'reply'>) {
    return this.http
      .post<BaseResponse<Comment>>(this.API$COMMENT + '/', comment);
  }

  countComment(belong: number) {
    return this.http
      .get<BaseResponse<number>>(this.API$COMMENT + `/count/${belong}`);
  }

  countComments(belongs: number[]) {
    return this.http
      .get<BaseResponse<number[]>>(this.API$COMMENT + `/counts/${belongs.join(',')}`);
  }

  getAboutHero(belong: number, offset: number) {
    return this.http
      .get<BaseResponse<Comment[]>>(this.API$COMMENT + `/hero/${belong}/${offset}`);
  }

  getAboutReply(reply: number, offset: number) {
    return this.http
      .get<BaseResponse<Comment[]>>(this.API$COMMENT + `/reply/${reply}/${offset}`);
  }

}
