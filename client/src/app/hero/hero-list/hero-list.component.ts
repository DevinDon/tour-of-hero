import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    protected app: AppService,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(v => {
      if (v.status) {
        this.heroes = v.content.sort((a, b) => a.id - b.id);
      } else {
        this.app.openBar('Cannot get all heroes data.');
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

}
