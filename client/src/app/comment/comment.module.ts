import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../module/material.module';
import { OtherModule } from '../module/other.module';
import { CommentComponent } from './comment.component';
import { CommentService } from './comment.service';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OtherModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
