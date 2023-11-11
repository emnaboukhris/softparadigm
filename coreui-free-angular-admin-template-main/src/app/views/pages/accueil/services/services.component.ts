import { Component, Input, OnInit } from '@angular/core';
import {  Services } from './services';
import {  servicesServices } from './services.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() fragment?: string;

  public services!: Services ;

  constructor(private  servicesService : servicesServices) { }

  ngOnInit(): void {
    this.getservices();
  }

  
  public getservices() : void {
    this.servicesService.getservices().subscribe(
      (response : Services) => {

        this.services = response  ; 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}