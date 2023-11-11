import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent implements OnInit {
  @Input() className!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
