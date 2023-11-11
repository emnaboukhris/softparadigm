import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Accueil } from "./accueil";
@Injectable({
    providedIn :"root"
})
export class AccueilServices {
    private apiServerUrl = environment.apiUrl ;
    constructor(private http: HttpClient){}
    
    public getAccueil(): Observable<Accueil>{
        return this.http.get<any> (`${this.apiServerUrl}accueil`)
    }
    public updateAccueil(accueil :Accueil): Observable<Accueil>{
        return this.http.put<Accueil> (`${this.apiServerUrl}accueil/${accueil.id}`,accueil)
    }

    public addAccueil(accueil :Accueil): Observable<Accueil>{
        return this.http.post<Accueil> (`${this.apiServerUrl}accueil/${accueil.id}`,accueil)
    }
    public deleteAccueil(accueilId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}accueil/${accueilId}`)
    }
}