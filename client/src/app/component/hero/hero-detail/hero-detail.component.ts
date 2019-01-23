import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/other/@types';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .getHero(id)
      .subscribe(v => this.hero = v);
  }

}
