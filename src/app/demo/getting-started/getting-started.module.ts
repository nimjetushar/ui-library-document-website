import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Common } from '../common/common.module';
import { DeveloperComponent } from './developer/developer.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  { path: 'developer', component: DeveloperComponent },
  { path: 'setup', component: SetupComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'setup'
  }
];

@NgModule({
  declarations: [
    DeveloperComponent,
    SetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class GettingStartedModule { }
