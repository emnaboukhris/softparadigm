import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Contact } from "./contact";
@Injectable({
    providedIn :"root"
})
export class ContactServices {
    private apiServerUrl = environment.apiUrl ;
    constructor(private http: HttpClient){}
    
    public getContact(): Observable<Contact>{
        return this.http.get<Contact> (`${this.apiServerUrl}contact`)
    }
    public updateContact(contact :Contact): Observable<Contact>{
        return this.http.put<Contact> (`${this.apiServerUrl}contact/${contact.id}`,contact)
    }

    public addContact(contact :Contact): Observable<Contact>{
        return this.http.post<Contact> (`${this.apiServerUrl}contact/${contact.id}`,contact)
    }
    public deleteContact(contactId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}contact/${contactId}`)
    }
}