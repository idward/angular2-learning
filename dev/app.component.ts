import {Component} from 'angular2/core';
import {ContactListComponent} from './contact/contactlist.component';
import {NewContactComponent} from './contact/newcontact.component';
import {HttpTestComponent} from './http-test.component';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>
        </div>
    `,
  directives:[HttpTestComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/contacts',name:'Contacts',component:ContactListComponent,useAsDefault:true},
  {path:'/newcontact',name:'NewContact',component:NewContactComponent},
  {path:'/newcontact/:lastName',name:'NewContactFromThis',component:NewContactComponent}
])

export class AppComponent {

}
