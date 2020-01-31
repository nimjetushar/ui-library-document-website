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

  compSyntax: string = `<t-radio label="Radio" name="radio" [(model)]="model" (handleChange)="onChange($event)"></t-radio>`;

  options: Options = {
    name: 't-radio',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'radio button label'
      },
      {
        parameter: 'model',
        type: 'boolean | string',
        desc: 'model value which changes on basis of radio button selection'
      },
      {
        parameter: 'name',
        type: 'string',
        desc: 'radio button name'
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        desc: 'Disable component'
      }
    ],
    methods: [
      {
        method: 'handleChange',
        param: ['event: boolean | string'],
        desc: 'triggers event on radio value change'
      }
    ]
  };

  constructor() { }

  onGroupChange(event: boolean | string): void {
    console.log(event);
  }
}
