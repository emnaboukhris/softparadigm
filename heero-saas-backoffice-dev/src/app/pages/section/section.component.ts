import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Accueil } from './accueil';
import { AccueilServices } from './accueil.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  public accueil!:Accueil ;

  constructor(private  accueilService : AccueilServices) { }

  ngOnInit(): void {
   this.getAccueil() ; 
  }
  public getAccueil() : void {
    this.accueilService.getAccueil().subscribe(
      (response : Accueil) => {
        this.accueil = response  ; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
