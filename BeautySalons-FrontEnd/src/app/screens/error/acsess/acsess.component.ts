import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-acsess',
  templateUrl: './acsess.component.html',
  styleUrls: ['./acsess.component.scss']
})
export class AcsessComponent implements OnInit {
  constructor(
    private titleService: Title
  ) { 
  }

  ngOnInit(): void {
    this.titleService.setTitle("חסר גישה")
  }

}
