import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
})
export class ZippyComponent implements OnInit {
  @Input() isExpanded: boolean;

  @Input('title') title: string = '';
  constructor() {}
  
  toggle(_$event) {
    
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {}
}
