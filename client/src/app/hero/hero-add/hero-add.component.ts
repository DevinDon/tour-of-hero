import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {

  constructor(
    public app: AppService
  ) { }

  ngOnInit() { }

  add() {
    this.app.openDialog(HeroDetailComponent, { data: { id: 0 } });
  }

}
