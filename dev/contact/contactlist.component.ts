import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'contact-list',
  template: `
        <ul>
            <li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.clicked]="selectedContact === contact">
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
    `,
  directives:[ContactComponent],
  providers:[ContactService]
})

export class ContactListComponent implements OnInit{
  public contacts:Contact[];
  // private _contactService:ContactComponent;

  constructor(private _contactService:ContactService){}

  //public showDetail = false;

  public selectedContact = null;

  onSelect(contact) {
    //this.showDetail = true;
    this.selectedContact = contact;
  }

  getContacts(){
    return this._contactService.getContacts().then((contacts:Contact[]) => this.contacts = contacts);
  }

  ngOnInit():any {
    this.getContacts();
  }

}

