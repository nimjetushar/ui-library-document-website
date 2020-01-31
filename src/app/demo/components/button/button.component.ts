import { Component, ViewEncapsulation } from '@angular/core';
import { Options } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  public compSyntax: string = '<t-button label="Home" type="primary" badge="fa-home"></t-button>';

  public options: Options = {
    name: 't-button',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'Button label'
      },
      {
        parameter: 'type',
        type: 'string',
        desc: 'Type of button to be rendered'
      },
      {
        parameter: 'badge',
        type: 'string',
        desc: 'Icon class to render badge'
      },
      {
        parameter: 'badgePosition',
        type: 'string',
        default: 'left',
        desc: 'Shows badge based on specified position'
      },
      {
        parameter: 'isLarge',
        type: 'boolean',
        default: false,
        desc: 'Increases button size when true'
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        desc: 'Disable button'
      }
    ]
  };
}
