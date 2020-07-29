import { Component } from '@angular/core';
import { IOptions } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {

  options: IOptions = {
    name: 'HttpService',
    componentType: 'Service',
    methods: [
      {
        method: 'getRequest',
        param: ['url: string', 'param: any (optional)'],
        desc: 'GET request takes url and param'
      },
      {
        method: 'postRequest',
        param: ['url: string', 'param: any'],
        desc: 'POST request takes url and param'
      },
      {
        method: 'putRequest',
        param: ['url: string', 'param: any'],
        desc: 'PUT request takes url and param'
      },
      {
        method: 'deleteRequest',
        param: ['url: string', 'param: any (optional)'],
        desc: 'DELETE request takes url and param'
      }
    ]
  };
}
