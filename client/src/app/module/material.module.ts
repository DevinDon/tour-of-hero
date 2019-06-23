import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }
