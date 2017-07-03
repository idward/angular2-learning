import {Component, ElementRef} from 'angular2/core';
import {DataService} from "./data.service";

@Component({
  selector:'my-component-2',
  template:`
        <h1>Component 2</h1>
        <div>
            <button (click)="onGetData()">Get random data</button>
            <p>Random Data: {{data}}</p>
            <input type="text" #input>
            <button (click)="onAddItem(input.value)">Add</button>
        </div>
    `,
  providers:[DataService]
})

export class MyComponent2 {
  data:string;

  constructor(private _dataService:DataService,private _elementRef:ElementRef){};

  onGetData(){
    this.data = this._dataService.getRandomData();
  }

  onAddItem(data:string){
    this._dataService.insertData(data);
    this._elementRef.nativeElement.querySelector('input').value = '';
  }
}
