import { Component, OnInit } from '@angular/core';
import { DemoComponent } from '../classes/demoComponent.class';
import { Dropdown } from '@fourjs/ng-library';

@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.scss']
})
export class AlertDemoComponent extends DemoComponent implements OnInit {

  hideAlert: boolean;
  dropdownOption: Dropdown[] = [
    {
      label: 'info',
      value: 'info'
    },
    {
      label: 'success',
      value: 'success'
    },
    {
      label: 'error',
      value: 'error'
    },
    {
      label: 'warn',
      value: 'warn'
    }
  ];
  dropdownValue: string = 'info';

  ngOnInit(): void {
    this.compSyntax = [
      `<t-alert type="success" message="message........"></t-alert>`,
      `<t-alert type="error" title="Title Error" message="message........"></t-alert>`,
      `<t-alert type="info" title="Title Info" message="message........" [enableClose]="true"></t-alert>`,
      `<t-alert type="info" title="Title Info" message="message........" [hideIcon]="true"></t-alert>`
    ];

    this.options = {
      name: 't-alert',
      options: [
        {
          parameter: 'type',
          type: `success | error | warn | info`,
          desc: 'Alert type'
        },
        {
          parameter: 'title',
          type: `string`,
          desc: 'Alert title'
        },
        {
          parameter: 'message',
          type: `string`,
          desc: 'Alert message'
        },
        {
          parameter: 'hideIcon',
          type: `boolean`,
          desc: 'Hide alert icon',
          default: false
        },
        {
          parameter: 'enableClose',
          type: `boolean`,
          desc: 'Dispaly close button',
          default: false
        }
      ],
      methods: [
        {
          method: 'onCloseClick',
          param: ['boolean'],
          desc: `Event triggered on click of close button, 
          close button is just place holder actual logic need's to be implemented using this`
        }
      ]
    };
  }

  onClose(status: boolean): void {
    this.hideAlert = status;
  }
}
