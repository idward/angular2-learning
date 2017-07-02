///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
import {Component, OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router, RouteParams} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';

@Component({
  selector: 'new-contact',
  template: `
        <form [ngFormModel]="myForm" novalidate (ngSubmit)="onSubmit()">
            <div>
                <label for="firstName">FirstName: </label>
                <input type="text" id="firstName" [ngFormControl]="myForm.controls.firstName">
            </div>
            <div>
                <label for="lastName">LastName: </label>
                <input type="text" id="lastName" [ngFormControl]="myForm.controls.lastName">
            </div>
            <div>
                <label for="phone">Phone: </label>
                <input type="text" id="phone" [ngFormControl]="myForm.controls.phone">
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="text" id="email" [ngFormControl]="myForm.controls.email">
            </div>
            <div class="btn">
                <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
            </div>
        </form>
    `,
  providers: [ContactService]
})

export class NewContactComponent implements OnInit {
  public param_lastname;

  public myForm:ControlGroup;

  constructor(private _contactService:ContactService, private _router:Router,
              private _routeParams:RouteParams, private _formbuilder:FormBuilder) {
  }

  onSubmit() {
    this._contactService.insertContact(this.myForm.value);
    this._router.navigate(['Contacts']);
  }

  ngOnInit():any {
    this.param_lastname = this._routeParams.params['lastName'];
    this.myForm = this._formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

}
