import { Component } from '@angular/core';
import { Options } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss']
})
export class RadioDemoComponent {

  groupVal: string = 'groupA';
  individualVal: boolean;

  compSyntax: string = `<t-radio label="Radio" name="radio" [(model)]="model"></t-radio>`;

  options: Options = {
    name: 't-radio',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'Radio button label'
      },
      {
        parameter: 'name',
        type: 'string',
        desc: 'Radio button name'
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        desc: 'Disable component'
      }
    ]
  };
}