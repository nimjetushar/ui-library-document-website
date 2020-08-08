import { Component } from '@angular/core';
import { IOptions } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  compSyntax: string[] =
    [
      `<t-checkbox name="checkbox" label="Checkbox" [(value)]="modelValue"></t-checkbox>`,
      `<t-checkbox label="Checkbox" disabled="true"></t-checkbox>`
    ];

  options: IOptions = {
    name: 't-checkbox',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'Checkbox label'
      },
      {
        parameter: 'name',
        type: 'string',
        desc: 'Checkbox name'
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        desc: 'Disable component'
      },
      {
        parameter: 'readonly',
        default: 'false',
        type: 'boolean',
        desc: 'Component cannot be edited'
      }
    ]
  };

  modelValue: boolean = true;
}
