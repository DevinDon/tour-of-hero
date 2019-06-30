import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroListComponent } from '../hero/hero-list/hero-list.component';
import { HeroTopsComponent } from '../hero/hero-tops/hero-tops.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'hero/list', component: HeroListComponent },
      { path: 'hero/tops', component: HeroTopsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

export class RouteReuseHandler implements RouteReuseStrategy {

  private cache: Map<string, DetachedRouteHandle> = new Map();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !route.data.reload;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.cache.set(route.routeConfig.path, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.cache.has(route.routeConfig.path);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.cache.get(route.routeConfig.path);
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

}
