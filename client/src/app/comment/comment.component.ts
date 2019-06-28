import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app.service';
import { Hero } from '../hero/hero.model';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public comments: Comment[] = [];
  public form: FormGroup;
  public hasMore = true;

  constructor(
    public app: AppService,
    @Inject(MAT_DIALOG_DATA) public hero: Hero,
    private service: CommentService
  ) {
    this.form = new FormGroup({
      comment: new FormControl('', [Validators.maxLength(250)])
    });
  }

  ngOnInit() {
    this.getMoreComments();
  }

  add() {
    this.service
      .add({
        belong: this.hero.id,
        content: this.form.get('comment').value
      })
      .subscribe(result => {
        if (result.status) {
          this.comments.push(result.content);
          this.form.get('comment').setValue('');
          this.app.openBar(`Comment successfully.`);
        } else {
          this.app.openBar(`Cannot comment to this content.`);
        }
      });
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
