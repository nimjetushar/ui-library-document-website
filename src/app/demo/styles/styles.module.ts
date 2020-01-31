import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Common } from '../common/common.module';
import { ColorPalletComponent } from './color-pallet/color-pallet.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: 'colorPallet', component: ColorPalletComponent },
  { path: 'grid', component: GridComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'colorPallet'
  }
];

@NgModule({
  declarations: [
    ColorPalletComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class StylesModule { }
