import { Component, OnInit } from '@angular/core';
import { Team } from './Team';
import { TeamService } from './team.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TeamCard } from './teamCard/teamCard';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public team!: Team ;
  public TeamCards! : TeamCard[]

  constructor(private  teamService : TeamService) { }

  ngOnInit(): void {
    this.getTeam();
    this.getTeamMembers();
  }
  
  public getTeam() : void {
    this.teamService.getTeam().subscribe(
      (response : Team) => {
        this.team = response  ;
         
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getTeamMembers() : void {
    this.teamService.getTeamMembers().subscribe(
      (response : TeamCard[]) => {
        this.TeamCards = response  ;
         
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
