import {Component} from 'angular2/core';
import {HttpTestServer} from './http-test.server';

@Component({
  selector: 'http-test',
  template: `
        <div>
            <button (click)="getDataInfo()">Test GET Request</button>
            <p>Output:{{getData}}</p>
        </div>
        <div>
            <button (click)="postDataInfo()">Test POST Request</button>
            <p>Output:{{postData}}</p>
        </div>
    `,
  providers:[HttpTestServer]
})

export class HttpTestComponent {
  public getData:string;
  public postData:string;

  constructor(private _httpServer:HttpTestServer){};

  getDataInfo(){
    this._httpServer.getCurrentTime().subscribe(
      data => this.getData = JSON.stringify(data),
      error => console.log(error),
      () => console.log('complete')
    );
  }

  postDataInfo(){
   this._httpServer.postJSON().subscribe(
     data => this.postData = JSON.stringify(data),
     error => console.log(error),
     () => console.log('Finished')
   );
  }

}
