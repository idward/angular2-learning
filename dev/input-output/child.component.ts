import {Component, Output, Input} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'child',
  template: `
        <div class="child">
            <h3>Child</h3>
            <p>Child Value From Parent:{{parentValue}}</p>
            <input type="text" #childInput value="" (keyup)="onChange(childInput.value)">
        </div>
    `,
  //inputs:['parentValue:passedValue'],
  //outputs:['childValueChanged']
})

export class ChildComponent {
  @Input() 'parentValue:passedValue';
  @Output() childValueChanged = new EventEmitter<string>();

  onChange(value:string){
    this.childValueChanged.emit(value);
  }

}
