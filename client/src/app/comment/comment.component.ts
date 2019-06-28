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

  constructor(
    private app: AppService,
    @Inject(MAT_DIALOG_DATA) public hero: Hero,
    private service: CommentService
  ) { }

  ngOnInit() {
    this.service
      .getAboutHero(this.hero.id)
      .subscribe(result => {
        if (result.status) {
          this.comments = result.content;
        } else {
          this.app.openBar(`Cannot get comments of hero ${this.hero.name}.`);
        }
      });
  }

}
