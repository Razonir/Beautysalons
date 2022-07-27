import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() blogo = "לוגו";
  @Input() bname = "שם עסק";
  @Input() bsubject = "נושא"
  @Input() baddress = "כתובת"
  @Input() bcity = "עיר"
  @Input() blikes = "0"
  @Input() bviews = "0"


  constructor() { }

  ngOnInit(): void {
  }

}
