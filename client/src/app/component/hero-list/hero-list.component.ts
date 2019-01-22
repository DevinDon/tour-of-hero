import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() { }

}
