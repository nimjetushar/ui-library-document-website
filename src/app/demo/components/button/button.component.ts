import { Component, ViewEncapsulation } from '@angular/core';
import { IOptions } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  compSyntax: string[] = ['<t-button label="Home" type="primary" badge="fa-home"></t-button>'];

  options: IOptions = {
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
        desc: 'Type of button, valid values are primary, secondary, tertiary',
        default: 'primary'
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
        desc: 'Badge position in button, valid values are right, left'
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
        desc: 'Disabled button'
      }
    ]
  };

  clickHandler(): void {
    alert('button clicked !!!!');
  }
}
