import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../module/material.module';
import { OtherModule } from '../module/other.module';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroTopsComponent } from './hero-tops/hero-tops.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    HeroAddComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroTopsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OtherModule
  ],
  exports: [
    HeroAddComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroModule { }
