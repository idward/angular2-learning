import {Component} from 'angular2/core';
import {MyComponent1} from './dependency-injection/c1.component';
import {MyComponent2} from './dependency-injection/c2.component';

@Component({
  selector: 'my-app',
  template: `
      <section class="component">
            <my-component-1></my-component-1>
      </section>
      <section class="component">
            <my-component-2></my-component-2>
      </section>
    `,
  directives:[MyComponent1,MyComponent2]
})

export class AppComponent {
}
