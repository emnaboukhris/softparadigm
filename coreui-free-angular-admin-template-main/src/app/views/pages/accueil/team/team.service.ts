import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "./Team";
import { TeamCard } from "./team-card/teamCard";
@Injectable({
    providedIn :"root"
})
export class TeamService {
    private apiServerUrl = "http://localhost:8080/" ;
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