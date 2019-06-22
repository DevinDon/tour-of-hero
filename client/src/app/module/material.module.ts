import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
