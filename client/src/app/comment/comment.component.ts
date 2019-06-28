import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app.service';
import { Hero } from '../hero/hero.model';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public comments: Comment[] = [];
  public hasMore = true;

  constructor(
    private app: AppService,
    @Inject(MAT_DIALOG_DATA) public hero: Hero,
    private service: CommentService
  ) { }

  ngOnInit() {
    this.getMoreComments();
  }

  getMoreComments() {
    this.service
      .getAboutHero(this.hero.id, this.comments.length)
      .subscribe(result => {
        if (result.status) {
          this.comments = this.comments.concat(result.content);
          this.hasMore = result.content.length === 10;
        } else {
          this.app.openBar(`Cannot get comments of hero ${this.hero.name}.`);
          this.hasMore = false;
        }
      });
  }

}
