import { Component } from '@angular/core';
import Detect from 'tutility/detect';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent {

  deviceDetail: any;

  detecBrowserHandler(): void {
    const detect = new Detect();
    this.deviceDetail = detect.parse(navigator.userAgent);
    console.info(this.deviceDetail);
  }
}
