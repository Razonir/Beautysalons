import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicecardside',
  templateUrl: './servicecardside.component.html',
  styleUrls: ['./servicecardside.component.scss']
})
export class ServicecardsideComponent implements OnInit {

  
  @Input() icon = '/assets/instegram.webp';
  @Input() link = '/business';
  @Input() val = 'null';
  @Input() len = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
