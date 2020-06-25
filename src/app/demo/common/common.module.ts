import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { NgLibrary } from '@fourjs/ng-library';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoWrapperComponent],
  imports: [
    CommonModule,
    NgLibrary,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    DemoWrapperComponent,
    NgLibrary,
    FormsModule,
    HttpClientModule,
  ]
})
export class Common { }
