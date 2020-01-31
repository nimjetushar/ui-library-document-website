import { Component, OnInit } from '@angular/core';
import { Options } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {

  public compSyntax: string;
  public options: Options;
  constructor() { }

  ngOnInit(): void {
    this.compSyntax = `<t-badge badge="fa-home"></t-badge> \n
     <t-badge badge="fa-font-awesome"></t-badge>`;

    this.options = {
      name: 't-badge',
      options: [
        {
          parameter: 'badge',
          type: 'string',
          desc: 'Icon class to render badge'
        }
      ]
    };
  }
}
