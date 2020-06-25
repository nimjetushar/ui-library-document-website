import { Component } from '@angular/core';
import Detect from 'tutility/build/detect';

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
    console.log(this.deviceDetail);
  }
}
