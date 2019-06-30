import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  public pagination = {
    offset: 0,
    limit: 15,
    count: 0,
    current: 0,
    total: 0
  };
  public heroes: Hero[] = [];

  constructor(
    public app: AppService,
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.app.setInit('/hero/list', this.reload.bind(this));
    this.reload();
  }

  reload() {
    this.getCount();
    this.getLimit();
  }

  add() {
    this.app
      .openDialog(HeroDetailComponent, { data: { id: 0 } })
      .afterClosed()
      .subscribe(() => this.reload());
  }

  getCount() {
    this.service
      .count()
      .subscribe((v) => {
        if (v.status) {
          this.pagination.count = v.content;
          this.pagination.total = Math.ceil(this.pagination.count / this.pagination.limit);
        } else {
          this.app.openBar(`Cannot count heroes number.`);
        }
      });
  }

  getLimit(offset: number = this.pagination.offset, limit: number = this.pagination.limit) {
    this.service
      .getLimit(offset, limit)
      .subscribe(v => {
        if (v.status) {
          this.heroes = v.content.sort((a, b) => a.id - b.id);
          this.pagination.current = Math.ceil(this.pagination.offset / this.pagination.limit + 1);
        } else {
          this.app.openBar(`Cannot get heroes data, from ${offset + 1} to ${offset + limit}.`);
        }
      });
  }

  delete(id: number) {
    this.service
      .delete(id)
      .subscribe(v => {
        if (v.status) {
          this.app.openBar(`Hero ${id} has been deleted.`);
          this.heroes.splice(this.heroes.findIndex(value => value.id === id), 1);
          this.getCount();
        } else {
          this.app.openBar(`Hero ${id} deleted failed.`);
        }
      });
  }

  openDetail(id: number) {
    this.app.openDialog(HeroDetailComponent, { data: this.heroes.find(v => v.id === id) });
  }

  prev() {
    this.getCount();
    this.getLimit(this.pagination.offset -= (this.pagination.limit > this.pagination.offset ? 0 : this.pagination.limit));
  }

  next() {
    this.getCount();
    this.getLimit(this.pagination.offset += this.pagination.limit);
  }

  trackByFn(index: number, item: Hero) {
    return item.id;
  }

}
