import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { I18NService } from './i18n.service';
import { destory } from './other/destory';

interface Route {
  path: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  public routes: Route[];

  public title = 0;

  constructor(
    public app: AppService,
    private i18n: I18NService,
    private router: Router
  ) {
    this.loadLanguage();
    i18n.loadFunctions.push(this.loadLanguage.bind(this));
  }

  ngOnInit() {
    this.subscriptions.push(
      this.router.events
        .subscribe(v => {
          if (v instanceof NavigationEnd) {
            this.title = this.routes.findIndex(route => route.path === v.urlAfterRedirects);
          }
        })
    );
  }

  loadLanguage() {
    this.routes = this.i18n.get('AppComponent', 'routes');
  }

  trackByFn(index: number, item: Route) {
    return item.path;
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
