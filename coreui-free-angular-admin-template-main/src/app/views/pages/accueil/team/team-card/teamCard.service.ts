import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TeamCard } from "./teamCard";
@Injectable({
    providedIn :"root"
})
export class TeamMemberService {
    private apiServerUrl = "http://localhost:8080/" ;
    constructor(private http: HttpClient){}
    
    public getTeamMembers(): Observable<TeamCard[]>{
        return this.http.get<TeamCard[]> (`${this.apiServerUrl}teamMembers`)
    }


    
 
    public updateTeamMembers(team :TeamCard): Observable<TeamCard>{
        return this.http.put<TeamCard> (`${this.apiServerUrl}teamMembers/${team.id}`,team)
    }

    public addTeamMembers(team :TeamCard): Observable<TeamCard>{
        return this.http.post<TeamCard> (`${this.apiServerUrl}teamMembers`,team)
    }
    public deleteTeamMembers(teamId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}teamMembers/${teamId}`)
    }
}