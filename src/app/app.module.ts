import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Common } from './demo/common/common.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityComponent } from './demo/utility/utility.component';
import { ReferenceComponent } from './demo/reference/reference.component';
import { HomeComponent } from './home/home.component';
import { ToastService } from '@fourjs/ng-library';

@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent,
    ReferenceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Common
  ],
  providers: [
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
