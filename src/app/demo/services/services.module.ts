import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Common } from '../common/common.module';
import { HttpComponent } from './http/http.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  { path: 'http', component: HttpComponent },
  { path: 'toast', component: ToastComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'http'
  }
];

@NgModule({
  declarations: [
    HttpComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class ServicesModule { }
