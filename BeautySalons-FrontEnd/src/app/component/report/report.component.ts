import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportshow = 'block';
  reporttext = 'דיווח על תוכן שאינו תקין'
  contact={
    useremail : "",
    userphone : "",
    usertext : "",
   }
   displaycontacterrors = "none";


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  

  contactus(){
    if (this.contact.useremail == undefined || this.contact.useremail == '' ||
    this.contact.userphone == undefined || this.contact.userphone == '' ||
    this.contact.usertext == undefined || this.contact.usertext == '') {
    this.displaycontacterrors = 'flex';
  } else {
    this.userService.contact(this.contact).subscribe();
    this.reportshow = 'none';
    this.reporttext = 'דיווח נקלט בהצלחה';
  }
  }

  goToHome() {
    this.router.navigate(['/']);
  }
  refreshpage() {
    location.reload()
  }
}
