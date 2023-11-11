import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {Team } from "./Team";
import { TeamCard } from "./teamCard/teamCard";
@Injectable({
    providedIn :"root"
})
export class TeamService {
    private apiServerUrl = environment.apiUrl ;
    constructor(private http: HttpClient){}
    
    public getTeamMembers(): Observable<TeamCard[]>{
        return this.http.get<TeamCard[]> (`${this.apiServerUrl}teamMembers`)
    }

    public getTeam(): Observable<Team>{
        return this.http.get<Team> (`${this.apiServerUrl}team`)
    }
    public updateTeam(team :Team): Observable<Team>{
        return this.http.put<Team> (`${this.apiServerUrl}team/${team.id}`,team)
    }

    public addTeam(team :Team): Observable<Team>{
        return this.http.post<Team> (`${this.apiServerUrl}team/${team.id}`,team)
    }
    public deleteTeam(teamId :String): Observable<void>{
        return this.http.delete<void> (`${this.apiServerUrl}team/${teamId}`)
    }
}