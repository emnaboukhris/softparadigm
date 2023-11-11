import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Services } from "./services";
@Injectable({
    providedIn :"root"
})
export class servicesServices {
    private apiServerUrl = "http://localhost:8080/" ;
    constructor(private http: HttpClient){}
    
    public getservices(): Observable<Services>{
        return this.http.get<any> (`${this.apiServerUrl}services`)
    }
    public updateservices(services :Services): Observable<Services>{
        return this.http.put<Services> (`${this.apiServerUrl}services/${services.id}`,services)
    }

    public addservices(services :Services): Observable<Services>{
        return this.http.post<Services> (`${this.apiServerUrl}services/${services.id}`,services)
    }
    public deleteservices(servicesId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}services/${servicesId}`)
    }
}