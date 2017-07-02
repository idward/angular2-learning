import {Component} from 'angular2/core';
import {Contact} from './contact';
import {Router} from  'angular2/router';

@Component({
  selector:'contact',
  template:`
        <div>
            <label for="firstName">FirstName: </label>
            <input type="text" id="firstName" [(ngModel)]="contact.firstName">
        </div>
        <div>
            <label for="lastName">LastName: </label>
            <input type="text" id="lastName" [(ngModel)]="contact.lastName">
        </div>
        <div>
            <label for="phone">Phone: </label>
            <input type="text" id="phone" [(ngModel)]="contact.phone">
        </div>
        <div>
            <label for="email">Email: </label>
            <input type="text" id="email" [(ngModel)]="contact.email">
        </div>
        <div class="btn">
            <button (click)="addNewContact(contact)">create contact from this contact</button>
        </div>
    `,
  inputs:['contact']
})

export class ContactComponent {
  public passedContact:Contact;

  constructor(private _router:Router){}

  addNewContact(contact){
    this._router.navigate(['NewContactFromThis',{lastName:contact.lastName}])
  }
}
