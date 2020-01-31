import { Component } from '@angular/core';
import { Options } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss']
})
export class TooltipDemoComponent {

  compSyntax: string = ` <span tooltip="content to be shown in the tooltip"
  [tooltipDisabled]="false"
  [tooltipAnimation]="true"
  tooltipPlacement="bottom"
  >Element on which tooltip is added  </span>`;

  options: Options = {
    name: 'tooltip',
    componentType: 'Directive',
    options: [
      {
        parameter: 'tooltip',
        type: 'string | TooltipContent',
        desc: 'content to be displayed inside tooltip'
      },
      {
        parameter: 'tooltipDisabled',
        type: 'boolean',
        desc: 'disables tooltip'
      },
      {
        parameter: 'tooltipAnimation',
        type: 'boolean',
        default: true,
        desc: 'enable animation for tooltip'
      },
      {
        parameter: 'tooltipPlacement',
        type: 'top | bottom | left | right',
        default: 'bottom',
        desc: 'tooltip placement'
      }
    ]
  };

  constructor() { }

}
