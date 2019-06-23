import { Platform } from '@angular/cdk/platform';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Tour of Heroes';

  constructor(
    protected app: AppService,
    private location: Location,
    protected platform: Platform
  ) { }

  isPath(path: string) {
    return this.location.path() === path;
  }

}
