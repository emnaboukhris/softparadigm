import { HttpErrorResponse } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { About } from './about';
import { AboutServices } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() fragment?: string;
  public about!: About ;

  addTaskValue : string = '';
  editTaskValue : string = '';
  form!: FormGroup;

  updatedList! : String[] ; 

  updateAbout = new FormGroup({
    title : new FormControl(''), 
    leftText : new FormControl(''), 
    rightText : new FormControl(''), 
    button : new FormControl(''), 
    list :new FormControl(''), 

  })








  constructor( private  aboutService : AboutServices, 

    ) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.getAbout();
     
  }
        
updateAboutUs(){
  console.log(this.updateAbout.value)
  this.about.title = this.updateAbout.value.title ??"" ; 
this.about.button = this.updateAbout.value.button ??"" ; 
this.about.leftText = this.updateAbout.value.leftText ??"" ; 
this.about.rightText = this.updateAbout.value.rightText ??"" ; 
this.about.list =this.updatedList  ; 

        this.onUpdateAbout(this.about);
    
}



addElement() {
  this.updatedList.push(`${this.updateAbout.value.list}`) ; 
  
  

}

deleteElement(index : number) {
  this.updatedList.splice(index, 1);
}



  public getAbout() : void {
    this.aboutService.getAbout().subscribe(
      (response : About) => {
        console.log(response);

        this.about = response  ;
        this.updateAbout = new FormGroup({

          title : new FormControl(`${this.about.title}`), 
          leftText : new FormControl(`${this.about.leftText}`), 
          rightText : new FormControl(`${this.about.rightText}`), 
          button : new FormControl(`${this.about.button}`), 
          list :new FormControl(''), 
        })
        this.updatedList = this.about.list ; 

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
        this.getAbout();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
