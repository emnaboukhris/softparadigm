import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactServices } from './contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact!: Contact ;
  @Input() fragment?: string;


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
