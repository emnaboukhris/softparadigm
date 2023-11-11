import { Component, Input, OnInit } from '@angular/core';
import { TeamCard } from './teamCard';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input()
  teamCard!: TeamCard;

  constructor() { }

  ngOnInit(): void {
    console.log("ddddddd");

  }

}
