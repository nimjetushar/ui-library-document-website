import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Common } from '../common/common.module';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { DynamicFieldsDemoComponent } from './dynamic-fields/dynamic-fields.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { ScrollTopDemoComponent } from './scroll-top-demo/scroll-top-demo.component';

const routes: Routes = [
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'dynamicFields', component: DynamicFieldsDemoComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'navigateTop', component: ScrollTopDemoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'badge'
  }
];

@NgModule({
  declarations: [
    BadgeComponent,
    ButtonComponent,
    DynamicFieldsDemoComponent,
    CheckboxComponent,
    RadioDemoComponent,
    TooltipDemoComponent,
    DropdownDemoComponent,
    ScrollTopDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common
  ]
})
export class ComponentsModule { }
