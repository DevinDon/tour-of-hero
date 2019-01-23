import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '../component/hero/hero-list/hero-list.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { HeroDetailComponent } from '../component/hero/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'hero-list', component: HeroListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
