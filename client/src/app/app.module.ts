import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroTopComponent } from './hero/hero-top/hero-top.component';
import { MaterialModule } from './module/material.module';
import { OtherModule } from './module/other.module';
import { RoutingModule } from './module/routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroTopComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    OtherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
