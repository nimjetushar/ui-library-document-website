import {
  Component, Input, OnInit, ViewEncapsulation,
  ViewChild, ElementRef
} from '@angular/core';
import { ToastService } from '@fourjs/ng-library';

export interface Column {
  label: string;
  value: string;

  class?: string;
  width?: string;
}

interface DocOptions {
  parameter: string;
  desc: string;
  type: string;
  default?: string | boolean;
}

interface MethodOptions {
  method: string;
  param: string[];
  desc: string;
}

export interface Options {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: DocOptions[];
  methods?: MethodOptions[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DemoWrapperComponent implements OnInit {
  @Input() header: string;
  @Input() code: string = '';
  @Input() set options(docData: Options) {
    if (docData) {
      this.enableOptions = true;
      this.name = docData.name;
      this.docOptions = docData.options;
      this.methodOptions = docData.methods;
      if (docData.componentType) {
        this.componentType = docData.componentType;
      }
    }
  }

  @ViewChild('output', { static: true }) outputWrapper: ElementRef;
  @ViewChild('ref', { static: true }) refWrapper: ElementRef;

  isDemoContainer: boolean;
  codeEle: { content: string; class: string }[];
  enableOutput: boolean = true;
  enableDoc: boolean = true;
  enableOptions: boolean;
  name: string;
  docOptions: DocOptions[];
  methodOptions: MethodOptions[];
  componentType: string = 'Component';
  docColumns: Column[] = [
    { label: 'Name', value: 'parameter', width: '20%' },
    { label: 'Type', value: 'type', width: '20%' },
    { label: 'Default', value: 'default', width: '20%' },
    { label: 'Description', value: 'desc', width: '40%' }
  ];

  methodColumns: Column[] = [
    { label: 'Name', value: 'method', width: '20%' },
    { label: 'Parameters', value: 'param', width: '20%' },
    { label: 'Description', value: 'desc', width: '60%' }
  ];

  constructor(private toast: ToastService) { }

  ngOnInit(): void {
    this.enableOutput = !this.outputWrapper.nativeElement.childNodes.length;
    this.enableDoc = !this.refWrapper.nativeElement.childNodes.length;
  }

  copyToClipboard(): void {
    const copyEle = document.createElement('input');
    document.body.appendChild(copyEle);
    copyEle.setAttribute('value', this.code);
    copyEle.select();
    document.execCommand('copy');
    document.body.removeChild(copyEle);

    this.toast.show({ message: 'Copied...', type: 'info' });
  }
}
