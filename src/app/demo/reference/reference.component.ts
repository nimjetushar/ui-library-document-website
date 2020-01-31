import { Component } from '@angular/core';

declare var require: any;
const packageJson = require('../../../../package.json');

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {

  libLists: { name: string, url: string, icon: string }[] = [];

  constructor() {

    let angularversion = packageJson.dependencies['@angular/core'];
    angularversion = angularversion.replace(/[~^]/gi, '');

    this.libLists = [
      {
        name: `Angular (${angularversion})`,
        url: 'https://angular.io/api',
        icon: 'fa-font'
      },
      {
        name: 'Grid system',
        url: 'https://nimjetushar.github.io/grid-css/',
        icon: 'fa-th'
      },
      {
        name: 'Font awesome',
        url: 'https://fontawesome.com/v4.7.0/icons/',
        icon: 'fa-font-awesome'
      },
      {
        name: 'ngx-toastr',
        url: 'https://www.npmjs.com/package/ngx-toastr',
        icon: 'fa-comments'
      }
    ];
  }
}
