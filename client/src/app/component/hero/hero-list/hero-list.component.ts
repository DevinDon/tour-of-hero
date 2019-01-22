import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';
import { HEROES } from 'src/app/other/config';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = HEROES;

  constructor(
    public app: AppService
  ) { }

  ngOnInit() { }

}
