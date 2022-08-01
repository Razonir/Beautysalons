import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() value = 'ריק';
  @Input() link = '';
  @Input() color= 'black';
  @Input() background= 'white';
  @Input() padding= '5px 0px';
  ngOnInit(): void {
  }

}
