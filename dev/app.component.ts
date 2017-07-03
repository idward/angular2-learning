import {Component} from 'angular2/core';
import {ChildComponent} from './input-output/child.component';

@Component({
  selector: 'my-app',
  template: `
       <div class="parent">
           <h3>Parent</h3>
           <p>Parent Value From Child:{{childValue}}</p>
           <input type="text" #parentInput value="" (keyup)="0">
           <child [passedValue]="parentInput.value" (childValueChanged)="childValue = $event"></child>
       </div> 
    `,
  directives:[ChildComponent]
})

export class AppComponent {
    public childValue:string;
}
