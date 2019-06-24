import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-tops.component.html',
  styleUrls: ['./hero-tops.component.scss']
})
export class HeroTopsComponent implements OnInit {

  heroes: Hero[] = [];

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

  getTop() {
    this.service.getTop().subscribe(v => {
      if (v.status) {
        this.heroes = v.content.sort((a, b) => b.like - a.like);
      } else {
        this.app.openBar('Cannot get top heroes data.');
      }
    });
  }

  like(id: number) {
    this.service
      .like(id)
      .subscribe(v => {
        if (v.status) {
          this.app.openBar(`Total liked: ${v.content}.`);
          this.heroes.find(value => value.id === id).like = v.content;
        } else {
          this.app.openBar('Liked failed.');
        }
      });
  }

  openDetail(id: number) {
    this.app.openDialog(HeroDetailComponent, { data: this.heroes.find(v => v.id === id) });
  }

}
