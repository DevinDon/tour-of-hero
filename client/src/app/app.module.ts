import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './component/app/app.component';
import { DialogModule } from './module/dialog.module';
import { MatModule } from './module/mat.module';
import { OtherModule } from './module/other.module';
import { AppRoutingModule } from './module/routing.module';
import { HeroListComponent } from './component/hero/hero-list/hero-list.component';
import { FillWithPipe } from './other/pipe/fill-with.pipe';
import { HeroDetailComponent } from './component/hero/hero-detail/hero-detail.component';
import { MessageComponent } from './component/message/message.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    FillWithPipe,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    OtherModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
