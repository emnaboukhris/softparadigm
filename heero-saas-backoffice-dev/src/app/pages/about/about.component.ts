import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { About } from './about';
import { AboutServices } from './about.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public about!: About ;
  public editAbout!: About; 
  public deleteAbout!: About; 

  constructor( private  aboutService : AboutServices) { }

  ngOnInit(): void {
    this.getAbout() ; 
  }


  

  public getAbout() : void {
    this.aboutService.getAbout().subscribe(
      (response : About) => {
        this.about = response  ; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateAbout(about: About): void {
    this.aboutService.updateAbout(about).subscribe(
      (response: About) => {
        console.log(response);
        this.getAbout();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteAbout(aboutId: String): void {
    this.aboutService.deleteAbout(aboutId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAbout();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
