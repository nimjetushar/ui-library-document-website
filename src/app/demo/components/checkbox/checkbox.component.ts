import { Component } from '@angular/core';
import { Options } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  compSyntax: string = `<t-checkbox name="checkbox" label="Checkbox" [(value)]="modelValue"
  (handleChange)="handleChange($event)"></t-checkbox> \n
  <t-checkbox label="Checkbox" disabled="true"></t-checkbox>`;

  public options: Options = {
    name: 't-checkbox',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'checkbox label'
      },
      {
        parameter: 'model',
        type: 'boolean',
        desc: 'model value which changes on basis of checkbox selection'
      },
      {
        parameter: 'name',
        type: 'string',
        desc: 'checkbox name'
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
        param: ['event: boolean'],
        desc: 'triggers event on checkbox value change'
      }
    ]
  };

  checkboxVal: boolean;
  modelValue: boolean = true;

  constructor() { }

  handleChange(event: boolean): void {
    console.log(event);
    this.checkboxVal = event;
  }
}
