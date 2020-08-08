import { Component } from '@angular/core';
import { Dropdown } from '@fourjs/ng-library';
import { IOptions } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss']
})
export class DropdownDemoComponent {

  compSyntax: string[] = [`<t-dropdown placeholder="Select option" [options]="options" [(ngModel)]="value" [filter]="true"></t-dropdown>`];

  pageOptions: IOptions = {
    name: 't-dropdown',
    options: [
      {
        parameter: 'placeholder',
        type: 'string',
        desc: 'Default text to display when no option is selected.'
      },
      {
        parameter: 'options',
        type: 'Dropdown[]',
        desc: 'An array of objects to display as the available options.'
      },
      {
        parameter: 'name',
        type: 'string',
        desc: 'Name of the input element.'
      },
      {
        parameter: 'scrollHeight',
        type: 'string',
        default: '200px',
        desc: 'Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.'
      },
      {
        parameter: 'disabled',
        type: 'boolean',
        default: 'false',
        desc: 'Disabled dropdown'
      },
      {
        parameter: 'readonly',
        type: 'boolean',
        default: 'false',
        desc: 'Component cannot be edited'
      },
      {
        parameter: 'autofocus',
        type: 'boolean',
        default: 'false',
        desc: 'Component should automatically get focus on load'
      },
      {
        parameter: 'tooltip',
        type: 'any',
        desc: 'Advisory information to display in a tooltip on hover.'
      },
      {
        parameter: 'tooltipPosition',
        type: 'string',
        default: 'top',
        desc: 'Position of the tooltip, valid values are right, left, top and bottom.'
      }
    ],
    methods: [
      {
        method: 'onFocus',
        param: ['event: Browser event'],
        desc: 'Callback to invoke when dropdown gets focus.'
      },
      {
        method: 'onBlur',
        param: ['event: Browser event'],
        desc: 'Callback to invoke when dropdown gets blur.'
      }
    ]
  };

  value: any = 'Audi';
  options: Dropdown[] = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Mazda', value: 'Mazda' },
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Cadillac', value: 'Cadillac' },
    { label: 'Ford', value: 'Ford' },
    { label: 'GMC', value: 'GMC' },
    { label: 'Mercedes', value: 'Mercedes' },
  ];

  tooltipDDValue: string;
  tooltip: string;
  tooltipPosition: string = 'left';
  tooltipOption: Dropdown[] = [
    { label: 'top', value: 'top' },
    { label: 'right', value: 'right' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' }
  ];

  eventType: string;

  constructor() {
    this.options = this.options.sort((a, b) => a.value.localeCompare(b.value));
  }

  modelChangeHandler(value: string): void {
    this.tooltip = value ? `Selected value is ${value}` : 'Please select value';
  }

  focusHandler(event: FocusEvent): void {
    this.eventType = event.type;
  }

  blurHandler(event: FocusEvent): void {
    this.eventType = event.type;
  }
}
