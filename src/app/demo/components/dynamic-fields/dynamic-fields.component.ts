import { Component, ViewChild } from '@angular/core';
import { IOptions as DemoOptions } from '../../common/demo-wrapper/demo-wrapper.component';
import {
  DynamicFieldsComponent, DynamicFieldButtonOptions, DynamicFields,
  DynamicFieldDropdownOptions, DynamicFieldDisabledOptions
} from '@fourjs/ng-library';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsDemoComponent {

  @ViewChild(DynamicFieldsComponent, { static: true }) dyFieldComp: DynamicFieldsComponent;

  compSyntax: string[] =
    // tslint:disable-next-line: max-line-length
    [`<t-dynamic-fields [fields]="field" [data]="data" [dropdownOptions]="dropdownOptions" [disabledFields]="disabledOptions" [buttonOptions]="buttonOptions" (primaryHandler)="onSearch($event)" (secondaryHandler)="onReset($event)" ></t-dynamic-fields>`];

  options: DemoOptions = {
    name: 't-dynamic-fields',
    options: [
      {
        parameter: 'fields',
        type: 'DynamicFields[]',
        desc: 'Array of object to display fields'
      },
      {
        parameter: 'data',
        type: 'DynamicFieldDataModel',
        desc: 'Object which initialize the fields with default value.'
      },
      {
        parameter: 'dropdownOptions',
        type: 'DynamicFieldDropdownOptions',
        desc: 'Dropdown options used to initalize dropdown if present in fields'
      },
      {
        parameter: 'disabledFields',
        type: 'DynamicFieldDisabledOptions',
        desc: 'Disables field if specified true'
      },
      {
        parameter: 'disableDefaultAction',
        type: 'boolean',
        desc: 'Hides default action buttons'
      },
      {
        parameter: 'buttonOptions',
        type: 'DynamicFieldButtonOptions',
        desc: 'Customize button labels and its properties.'
      }
    ],
    methods: [
      {
        method: 'primaryHandler',
        param: ['DynamicFieldDataModel'],
        desc: 'Emits fields data to parent component'
      },
      {
        method: 'secondaryHandler',
        param: ['DynamicFieldDataModel'],
        desc: 'Emits fields data to parent component'
      }
    ]
  };

  field: DynamicFields[] = [
    {
      label: 'Car Name',
      type: 'text',
      model: 'name'
    },
    {
      label: 'New model',
      type: 'checkbox',
      model: 'isNew'
    },
    {
      label: 'Select Brand',
      type: 'select',
      model: 'brand'
    }
  ];

  dropdownOptions: DynamicFieldDropdownOptions = {
    brand: [
      {
        label: 'Maruti',
        value: 'maruti'
      },
      {
        label: 'Hyundai',
        value: 'hyundai'
      },
      {
        label: 'Ford',
        value: 'ford'
      }
    ]
  };

  disabledOptions: DynamicFieldDisabledOptions = {
    isNew: true
  };

  buttonOptions: DynamicFieldButtonOptions = {
    primaryLabel: 'Submit'
  };

  output: any = {
    isNew: true
  };

  displayOutput: boolean;

  onSearch(param: { [key: string]: any }): void {
    console.info(param);
    this.displayOutput = true;
    this.output = Object.assign({}, param);
  }

  onReset(param: { [key: string]: any }): void {
    console.info(param);
    this.output = {};
    this.dyFieldComp.reset();
  }
}
