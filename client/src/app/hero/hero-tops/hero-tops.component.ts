import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { CommentComponent } from 'src/app/comment/comment.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-tops.component.html',
  styleUrls: ['./hero-tops.component.scss']
})
export class HeroTopsComponent implements OnInit {

  public count: { [index: number]: number } = {};
  public heroes: Hero[] = [];

  constructor(
    private app: AppService,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.getTop();
  }

  trackByFn(index: number, item: Hero) {
    return item.id;
  }

  getCommentCount(belong: number) {
    this.service
      .countComment(belong)
      .subscribe(result => {
        if (result.status) {
          this.count[belong] = result.content;
        } else {
          this.app.openBar(`Cannot get comment count of hero ${belong}.`);
        }
      });
  }

  getCommentCounts(belongs: number[]) {
    this.service
      .countComments(belongs)
      .subscribe(result => {
        if (result.status) {
          this.count = result.content;
        } else {
          this.app.openBar(`Cannot get comment count of heroes ${belongs}.`);
        }
      });
  }

  getTop() {
    this.service.getTop()
      .subscribe(result => {
        if (result.status) {
          this.heroes = result.content.sort((a, b) => b.like - a.like);
          this.getCommentCounts(this.heroes.map(hero => hero.id));
        } else {
          this.app.openBar('Cannot get top heroes data.');
        }
      });
  }

  like(id: number) {
    this.service
      .like(id)
      .subscribe(result => {
        if (result.status) {
          this.app.openBar(`Total liked: ${result.content}.`);
          this.heroes.find(value => value.id === id).like = result.content;
        } else {
          this.app.openBar('Liked failed.');
        }
      });
  }

  openComment(hero: Hero) {
    this.app.openDialog(CommentComponent, {
      autoFocus: false,
      data: hero,
      position: {
        bottom: '0',
        left: '0'
      },
      width: '100vw',
      height: '90vh',
      panelClass: 'fullable'
    });
  }

  openDetail(hero: Hero) {
    this.app.openDialog(HeroDetailComponent, { data: hero });
  }

}
