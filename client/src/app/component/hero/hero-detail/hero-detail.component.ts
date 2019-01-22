import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/other/@types';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor() { }

  ngOnInit() { }

}
