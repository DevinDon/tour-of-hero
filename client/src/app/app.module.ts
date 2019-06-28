import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroAddComponent } from './hero/hero-add/hero-add.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroTopsComponent } from './hero/hero-tops/hero-tops.component';
import { DialogModule } from './module/dialog.module';
import { MaterialModule } from './module/material.module';
import { OtherModule } from './module/other.module';
import { RoutingModule } from './module/routing.module';
import { LoadingInterceptor } from './other/loading.interceptor';
import { CommentReplyComponent } from './comment/comment-reply/comment-reply.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroTopsComponent,
    AboutComponent,
    HeroAddComponent,
    CommentComponent,
    CommentReplyComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    DialogModule,
    OtherModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class AppModule { }
