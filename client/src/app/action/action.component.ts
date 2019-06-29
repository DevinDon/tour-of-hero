import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeroDetailComponent } from '../hero/hero-detail/hero-detail.component';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(
    public app: AppService
  ) { }

  ngOnInit() { }

  add() {
    this.app.openDialog(HeroDetailComponent, { data: { id: 0 } });
  }

}
