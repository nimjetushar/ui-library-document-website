import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { IOptions } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-scroll-top-demo',
  templateUrl: './scroll-top-demo.component.html',
  styleUrls: ['./scroll-top-demo.component.scss']
})
export class ScrollTopDemoComponent implements AfterViewInit, OnDestroy {
  compSyntax: string[] = [`<t-navigate-top height="200"></t-navigate-top>`];
  options: IOptions = {
    name: 't-navigate-top',
    options: [
      {
        parameter: 'height',
        type: 'number',
        desc: 'Enables automatically when browser scroll crosses mentioned height',
        default: '500'
      }
    ]
  };

  ngAfterViewInit(): void {
    document.getElementsByTagName('body')[0].style.height = '1000px';
  }

  ngOnDestroy(): void {
    document.getElementsByTagName('body')[0].style.height = 'auto';
  }
}
