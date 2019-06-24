import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  public page = {
    offset: 0,
    limit: 15
  };
  public heroes: Hero[] = [];

  constructor(
    public app: AppService,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.getLimit();
  }

  getLimit(offset: number = this.page.offset, limit: number = this.page.limit) {
    this.service
      .getLimit(offset, limit)
      .subscribe(v => {
        if (v.status) {
          this.heroes = v.content.sort((a, b) => a.id - b.id);
        } else {
          this.app.openBar(`Cannot get heroes data, from ${offset + 1} to ${offset + limit}.`);
        }
      });
  }

  trackByFn(index: number, item: Hero) {
    return item.id;
  }

  delete(id: number) {
    this.service
      .delete(id)
      .subscribe(v => {
        if (v.status) {
          this.app.openBar(`Hero ${id} has been deleted.`);
          this.heroes.splice(this.heroes.findIndex(value => value.id === id), 1);
        } else {
          this.app.openBar(`Hero ${id} deleted failed.`);
        }
      });
  }

  openDetail(id: number) {
    this.app.openDialog(HeroDetailComponent, { data: this.heroes.find(v => v.id === id) });
  }

  prev() {
    this.getLimit(this.page.offset = this.page.offset - this.page.limit < 0 ? 0 : this.page.offset - this.page.offset);
  }

  next() {
    this.getLimit(this.page.offset += this.page.limit);
  }

}
