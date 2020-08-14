import { Component } from '@angular/core';
const packageJson = require('node_modules/@fourjs/ng-library/package.json');

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  primeDependency: string;
  angularCdkDependency: string;

  constructor() {
    console.info(packageJson);
    try {
      this.primeDependency = packageJson.peerDependencies.primeng;
      this.angularCdkDependency = packageJson.peerDependencies['@angular/cdk'];
    } catch (e) {
      console.error(e);
    }
  }
}
