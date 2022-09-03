import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.scss']
})
export class ServicecardComponent implements OnInit {

  constructor() { }

  @Input() icon = '/assets/instegram.webp';
  @Input() text = 'תוכן';
  @Input() link = '/business';
  @Input() val = 'null';

  ngOnInit(): void {
  }

}
