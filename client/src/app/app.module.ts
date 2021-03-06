import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActionComponent } from './action/action.component';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroModule } from './hero/hero.module';
import { I18NService } from './i18n.service';
import { MaterialModule } from './module/material.module';
import { OtherModule } from './module/other.module';
import { RouteReuseHandler, RoutingModule } from './module/routing.module';
import { LoadingInterceptor } from './other/loading.interceptor';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AboutComponent,
    ActionComponent,
    AppComponent,
    DashboardComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    OtherModule,
    CommentModule,
    HeroModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: RouteReuseHandler },
    AppService,
    I18NService
  ]
})
export class AppModule { }
