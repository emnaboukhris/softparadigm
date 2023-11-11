import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio';
import { portfolioServices } from './portfolio.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolio!: Portfolio ;

  constructor(private  portfolioService : portfolioServices) { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  
  public getPortfolio() : void {
    this.portfolioService.getportfolio().subscribe(
      (response : Portfolio) => {

        this.portfolio = response  ; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
