import { Component } from '@angular/core';

import { MenuItem } from '@fourjs/ng-library';
import { NavModel } from './nav-model';
import { APPNAME } from './constants/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: MenuItem[];
  appTitle: string = APPNAME;
  expanded: boolean;

  constructor() {
    const navModel = new NavModel();
    this.menuItems = navModel.nav;
  }

  sideBarToggled(navStatus: boolean): void {
    this.expanded = navStatus;
  }
}
