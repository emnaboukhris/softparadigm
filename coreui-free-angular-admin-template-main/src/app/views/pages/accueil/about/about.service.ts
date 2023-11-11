import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { About } from "./about";
@Injectable({
    providedIn :"root"
})
export class AboutServices {
    private apiServerUrl = "http://localhost:8080/" ;
    constructor(private http: HttpClient){}
    
    public getAbout(): Observable<About>{
        return this.http.get<About> (`${this.apiServerUrl}about`)
    }
    public updateAbout(about :About): Observable<About>{
        return this.http.put<About> (`${this.apiServerUrl}about/${about.id}`,about)
    }

    public addAbout(about :About): Observable<About>{
        return this.http.post<About> (`${this.apiServerUrl}about/${about.id}`,about)
    }
    
   
    public deleteAbout(aboutId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}about/${aboutId}`)
    }
}