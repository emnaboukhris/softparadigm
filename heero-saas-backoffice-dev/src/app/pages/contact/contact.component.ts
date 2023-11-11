import { Component, OnInit } from '@angular/core';
import { ContactServices } from './contact.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact!: Contact ;

  constructor( private  contactService : ContactServices) { }

  ngOnInit(): void {
    this.getContact() ; 
  }

  
  public getContact() : void {
    this.contactService.getContact().subscribe(
      (response : Contact) => {
        this.contact = response  ; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
