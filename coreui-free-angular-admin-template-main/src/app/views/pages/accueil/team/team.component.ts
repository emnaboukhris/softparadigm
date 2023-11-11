import { Component, Input, OnInit } from '@angular/core';
import { Team } from './Team';
import { TeamService } from './team.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TeamCard } from './team-card/teamCard';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamMemberService } from './team-card/teamCard.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() fragment?: string;
  public team!: Team ;
  public TeamCards! : TeamCard[]
  updatedTeam! : TeamCard[] ; 
  teamMember! : TeamCard ; 
  updateTeamText = new FormGroup({
    title : new FormControl(''), 
    subtitle : new FormControl(''), 
  })


  AddTeamMember = new FormGroup({
    name: new FormControl(''), 
    specialite: new FormControl(''), 
    description   : new FormControl(''), 
    twiterLink   : new FormControl(''), 
    facebookLink   : new FormControl(''), 
    instagramLink   : new FormControl(''), 
    linkedinLink   : new FormControl(''), 
    img    : new FormControl(''), 


  })

  UpdateTeamMember = new FormGroup({
    title : new FormControl(''), 
    subtitle : new FormControl(''), 
  })

  constructor(private  teamService : TeamService, private teamMemberService : TeamMemberService) { }

  ngOnInit(): void {
    this.getTeam();
    this.getTeamMembers();
    this.teamMember = this.TeamCards[0]
  }

  public onUpdateTeam(team: Team): void {
    this.teamService.updateTeam(team).subscribe(
      (response: Team) => {
        console.log(response);
        this.getTeam();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addTeamMember() {

this.teamMember.name = this.AddTeamMember.value.name ?? "" ; 
this.teamMember.specialite  = this.AddTeamMember.value.specialite  ?? "" ; 
this.teamMember.description  = this.AddTeamMember.value.description  ?? "" ; 
this.teamMember.twiterLink  = this.AddTeamMember.value.twiterLink  ?? "" ; 
this.teamMember.facebookLink  = this.AddTeamMember.value.facebookLink  ?? "" ; 
this.teamMember.instagramLink  = this.AddTeamMember.value.instagramLink  ?? "" ; 
this.teamMember.linkedinLink   = this.AddTeamMember.value.linkedinLink   ?? "" ; 

    this.teamMemberService.addTeamMembers(this.teamMember).subscribe(res => {
      console.log('added')
      this.ngOnInit();
    }, err => {
      alert(err);
    })
  }


  updateTeam(){
    this.team.title = this.updateTeamText.value.title ??"" ; 
  this.team.subtitle = this.updateTeamText.value.subtitle ??"" ; 
  this.TeamCards =this.updatedTeam  ; 
  
          this.onUpdateTeam(this.team);
      
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

