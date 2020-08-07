import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoWrapperComponent } from './demo-wrapper/demo-wrapper.component';
import { NgLibrary } from '@fourjs/ng-library';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonNoteComponent } from './common-note/common-note.component';

@NgModule({
  declarations: [
    DemoWrapperComponent,
    CommonNoteComponent
  ],
  imports: [
    CommonModule,
    NgLibrary,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    DemoWrapperComponent,
    CommonNoteComponent,
    NgLibrary,
    FormsModule,
    HttpClientModule
  ]
})
export class Common { }
