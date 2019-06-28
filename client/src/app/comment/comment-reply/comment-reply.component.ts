import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from 'src/app/app.service';
import { Hero } from 'src/app/hero/hero.model';
import { Comment } from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-reply',
  templateUrl: './comment-reply.component.html',
  styleUrls: ['./comment-reply.component.scss']
})
export class CommentReplyComponent implements OnInit {

  public comments: Comment[] = [];
  public hasMore = false;

  constructor(
    public app: AppService,
    @Inject(MAT_DIALOG_DATA) public comment: Comment,
    private service: CommentService
  ) { }

  ngOnInit() { }

  getAboutReply() {
    this.service
      .getAboutReply(this.comment.id, Math.min(this.comments.length - 1, 0))
      .subscribe(result => {
        if (result.status) {
          this.comments = this.comments.concat(result.content);
          this.hasMore = result.content.length === 10;
        } else {
          this.app.openBar(`Cannot get replies of comment ${this.comment.id}.`);
          this.hasMore = false;
        }
      });
  }

}
