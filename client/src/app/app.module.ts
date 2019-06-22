import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { MaterialModule } from './module/material.module';
import { RoutingModule } from './module/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
