import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { HeroDetailComponent } from '../component/hero/hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../component/hero/hero-search/hero-search.component';
import { HeroComponent } from '../component/hero/hero.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroComponent },
  { path: 'search', component: HeroSearchComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
