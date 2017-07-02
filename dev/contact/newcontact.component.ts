///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
import {Component, OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'new-contact',
  template: `
        <form #myForm="ngForm" novalidate (ngSubmit)="onSubmit()">
            <div>
                <label for="firstName">FirstName: </label>
                <input type="text" id="firstName" ngControl="firstName" 
                [(ngModel)]="newContact.firstName" #firstName required>
                <span *ngIf="!firstName.valid">Not Valid</span>
            </div>
            <div>
                <label for="lastName">LastName: </label>
                <input type="text" id="lastName" ngControl="lastName" 
                [(ngModel)]="newContact.lastName" required>
            </div>
            <div>
                <label for="phone">Phone: </label>
                <input type="text" id="phone" ngControl="phone" 
                [(ngModel)]="newContact.phone" required>
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="text" id="email" ngControl="email" 
                [(ngModel)]="newContact.email" required>
            </div>
            <div class="btn">
                <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
            </div>
        </form>
    `,
  providers: [ContactService]
})

export class NewContactComponent implements OnInit {
  public newContact:Contact;
  public param_lastname;

  constructor(private _contactService:ContactService, private _router:Router,
              private _routeParams:RouteParams) {
  }

  onSubmit() {
    this._contactService.insertContact(this.newContact);
    this._router.navigate(['Contacts']);
  }

  ngOnInit():any {
    this.param_lastname = this._routeParams.params['lastName'];
    this.newContact = {firstName: '', lastName: this.param_lastname, phone: '', email: ''};
  }

}
