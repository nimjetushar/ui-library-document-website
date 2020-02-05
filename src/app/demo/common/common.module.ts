import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { NgLibrary } from '@fourjs/ng-library';

@NgModule({
  declarations: [DemoWrapperComponent],
  imports: [
    CommonModule,
    NgLibrary
  ],
  exports: [
    DemoWrapperComponent,
    NgLibrary
  ]
})
export class Common { }
