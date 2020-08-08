import { Component } from '@angular/core';
import { IOptions } from '../../common/demo-wrapper/demo-wrapper.component';
import { Dropdown } from '@fourjs/ng-library';

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss']
})
export class TooltipDemoComponent {

  compSyntax: string[] =
    // tslint:disable-next-line: max-line-length
    [`<div tTooltip="Content to be shown in the tooltip" [tooltipDisabled]="false" [tooltipAnimation]="true"> Element on which tooltip is added </div>`];

  options: IOptions = {
    name: 'tooltip',
    componentType: 'Directive',
    options: [
      {
        parameter: 'tooltip',
        type: 'string | TooltipContent',
        desc: 'Content to be displayed inside tooltip'
      },
      {
        parameter: 'tooltipDisabled',
        type: 'boolean',
        desc: 'Disable tooltip'
      },
      {
        parameter: 'tooltipAnimation',
        type: 'boolean',
        default: true,
        desc: 'Enable animation for tooltip'
      },
      {
        parameter: 'tooltipPlacement',
        type: 'top | bottom | left | right',
        default: 'bottom',
        desc: 'Tooltip placement'
      }
    ]
  };

  tooltipOption: Dropdown[] = [
    { label: 'top', value: 'top' },
    { label: 'right', value: 'right' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' }
  ];
  tooltipPosition: string = 'top';
}
