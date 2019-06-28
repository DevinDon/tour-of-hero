import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
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

  public routes: Route[] = [{
    path: '/dashboard',
    icon: 'dashboard',
    title: 'Dashboard'
  },
  {
    path: '/hero/list',
    icon: 'format_list_numbered',
    title: 'Hero List'
  },
  {
    path: '/hero/tops',
    icon: 'whatshot',
    title: 'Tops Hero'
  },
  {
    path: '/about',
    icon: 'info_outline',
    title: 'About'
  }];

  public title: Route = {
    path: '/',
    icon: '',
    title: 'Tour of Heroes'
  };

  constructor(
    public app: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.router.events
        .subscribe(v => {
          if (v instanceof NavigationEnd) {
            this.title = this.routes.find(route => route.path === v.urlAfterRedirects);
          }
        })
    );
  }

  trackByFn(index: number, item: Route) {
    return item.path;
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
