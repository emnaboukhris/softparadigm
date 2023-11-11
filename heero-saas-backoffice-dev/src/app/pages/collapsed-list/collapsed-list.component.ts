import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-collapsed-list',
  templateUrl: './collapsed-list.component.html',
  styleUrls: ['./collapsed-list.component.css']
})
export class CollapsedListComponent implements OnInit {
  @Input() SpanText!: String;
  @Input() title!: String;
  @Input() text!: String;


  constructor() { }

  ngOnInit(): void {
  }

}
