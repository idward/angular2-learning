import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'new-contact',
  template: `
        <div>
            <label for="firstName">FirstName: </label>
            <input type="text" id="firstName" #firstName>
        </div>
        <div>
            <label for="lastName">LastName: </label>
            <input type="text" id="lastName" #lastName value="{{param_lastname}}">
        </div>
        <div>
            <label for="phone">Phone: </label>
            <input type="text" id="phone" #phone>
        </div>
        <div>
            <label for="email">Email: </label>
            <input type="text" id="email" #email>
        </div>
        <div class="btn">
            <button (click)="addContact(firstName.value,lastName.value,phone.value,email.value)">Create Contact</button>
        </div>
    `,
  providers: [ContactService]
})

export class NewContactComponent {
  public param_lastname = this._routeParams.params['lastName'];

  constructor(private _contactService:ContactService,private _router:Router,
              private _routeParams:RouteParams) {}

  addContact(firstName, lastName, phone, email) {
    let newContact:Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
    this._contactService.insertContact(newContact);
    this._router.navigate(['Contacts']);
  }
}
