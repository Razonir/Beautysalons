import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/model/business';
@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss']
})
export class CreateBusinessComponent implements OnInit {

  constructor() { }

  business: Business = new Business();
  displylcraeteerrors = 'none';

  ngOnInit(): void {
  }

  create(){
    alert();
  }
}
