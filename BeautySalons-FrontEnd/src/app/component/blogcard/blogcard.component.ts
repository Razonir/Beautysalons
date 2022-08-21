import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.scss']
})
export class BlogcardComponent implements OnInit {

  @Input() id = "0";
  @Input() blogo = "לוגו";
  @Input() btitle = "נושא";
  @Input() bsubtitle = "נושא";
  @Input() bcontent = "נושא";
  @Input() bcreatedate = "נושא";

  constructor() { }

  ngOnInit(): void {
  }

}
