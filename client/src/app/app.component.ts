import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Tour of Heroes';

  constructor(
    protected app: AppService,
    private location: Location
  ) { }

  isPath(path: string) {
    return this.location.path() === path;
  }

}
