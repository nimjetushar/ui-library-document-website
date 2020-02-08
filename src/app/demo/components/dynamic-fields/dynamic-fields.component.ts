import { Component, ViewChild } from '@angular/core';
import { Options as DemoOptions } from '../../common/demo-wrapper/demo-wrapper.component';
import {
  Fields, DynamicFieldsComponent, DynamicFieldOptions
} from '@fourjs/ng-library';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsDemoComponent {

  @ViewChild(DynamicFieldsComponent, { static: true }) dyFieldComp: DynamicFieldsComponent;

  public compSyntax: string =
    `<t-dynamic-fields 
    [fields]="field"
    [options]="option"
    (primaryHandler)="onSearch($event)"
    (secondaryHandler)="onReset($event)"
    ></t-dynamic-fields>`;

  public options: DemoOptions = {
    name: 't-dynamic-fields',
    options: []
  };

  field: Fields[] = [
    {
      label: 'Name',
      type: 'text',
      model: 'name'
    },
    {
      label: 'New model',
      type: 'checkbox',
      model: 'isNew'
    },
    {
      label: 'Brand',
      type: 'select',
      model: 'brand',
      options: 'brand'
    }
  ];

  option: DynamicFieldOptions = {
    dropdown: {
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
    }
  };

  output: any;

  onSearch(param: { [key: string]: any }): void {
    console.log(param);
    this.output = Object.assign({}, param);
  }

  onReset(param: { [key: string]: any }): void {
    console.log(param);
    this.output = undefined;
    this.dyFieldComp.reset();
  }
}
