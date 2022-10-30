import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle("מכוני היופי של ישראל")

  }

  goToHomeMale() {
    localStorage.setItem('gender','male')
    this.router.navigate(['/home']);
  }
  goToHomeFemale() {
    localStorage.setItem('gender','female')
    this.router.navigate(['/home']);
  }
  
}
