import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Portfolio } from "./portfolio";
@Injectable({
    providedIn :"root"
})
export class portfolioServices {
    private apiServerUrl = "http://localhost:8080/" ;
    constructor(private http: HttpClient){}
    
    public getportfolio(): Observable<Portfolio>{
        return this.http.get<any> (`${this.apiServerUrl}portfolio`)
    }
    public updateportfolio(portfolio :Portfolio): Observable<Portfolio>{
        return this.http.put<Portfolio> (`${this.apiServerUrl}portfolio/${portfolio.id}`,portfolio)
    }

    public addportfolio(portfolio :Portfolio): Observable<Portfolio>{
        return this.http.post<Portfolio> (`${this.apiServerUrl}portfolio/${portfolio.id}`,portfolio)
    }
    public deleteportfolio(portfolioId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}portfolio/${portfolioId}`)
    }
}