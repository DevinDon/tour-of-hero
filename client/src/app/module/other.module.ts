import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class OtherModule { }
