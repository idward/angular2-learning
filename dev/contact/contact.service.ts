import {Injectable} from 'angular2/core';
import {CONTACTS} from './mock-contact';
import {Contact} from './contact';

@Injectable()
export class ContactService {
  getContacts(){
    return Promise.resolve(CONTACTS);
  }
  insertContact(newContact){
    Promise.resolve(newContact).then((newContact:Contact) => CONTACTS.push(newContact));
  }
}
