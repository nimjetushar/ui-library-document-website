import { IOptions } from './../../common/demo-wrapper/demo-wrapper.component';
import { Component, ViewEncapsulation } from '@angular/core';
import { ToastService } from '@fourjs/ng-library';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent {

  options: IOptions = {
    name: 'ToastService',
    componentType: 'Service',
    methods: [
      {
        method: 'show',
        param: ['params: ToastParameters'],
        desc: 'Display single toast message'
      },
      {
        method: 'showAll',
        param: ['params: ToastParameters[]'],
        desc: 'Display multiple toast message'
      }
    ],
    options: [
      {
        parameter: 'title',
        type: 'string',
        desc: 'Notification title'
      },
      {
        parameter: 'message',
        type: 'string',
        desc: 'Notification message'
      },
      {
        parameter: 'type',
        type: 'string',
        default: 'success',
        desc: 'Specifies type of notification to show'
      },
      {
        parameter: 'timeOut',
        type: 'number',
        default: '4000',
        desc: 'Timeout for toast auto close'
      },
      {
        parameter: 'closeButton',
        type: 'boolean',
        default: false,
        desc: 'Display close button'
      },
      {
        parameter: 'id',
        type: 'any',
        desc: 'Identifier of the toast'
      },
      {
        parameter: 'sticky',
        type: 'boolean',
        desc: 'Whether the toast should be closed automatically based on life property or kept visible.'
      }
    ]
  };

  toastPositions: string[] = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center', 'center'];
  toastComp: string = '<t-toast baseZIndex="1050" position="top-right"></t-toast>';

  parameterCol: any[] = [
    {
      label: 'Name',
      value: 'name',
      width: '20%'
    },
    {
      label: 'Type',
      value: 'type',
      width: '20%'
    },
    {
      label: 'Default',
      value: 'default',
      width: '20%'
    },
    {
      label: 'Desc',
      value: 'desc',
      width: '40%'
    }
  ];

  paramData: any[] = [
    {
      name: 'position',
      type: 'string',
      default: 'top-right',
      desc: `Position of the component, valid values are "top-right", "top-left",
       "bottom-left", "bottom-right", "top-center, "bottom-center" and "center".`
    },
    {
      name: 'baseZIndex',
      type: 'number',
      default: 0,
      desc: 'Base zIndex value to use in layering.'
    }
  ];

  constructor(private toastService: ToastService) { }

  showToast(type: 'success' | 'error' | 'warn' | 'info'): void {
    this.toastService.show({ title: 'Title', message: 'message', type, closeButton: true });
  }

  multipleToast(): void {
    this.toastService.showMultiple([
      { title: 'Title', message: 'message', type: 'success' },
      { title: 'Title', message: 'message', type: 'warn' },
      { title: 'Title', message: 'message', type: 'info' }
    ]);
  }
}
