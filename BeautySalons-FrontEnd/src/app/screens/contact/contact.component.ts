import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 contact={
  useremail : "",
  userphone : "",
  usertext : "",
  
 }

  displaycontacterrors = "none";
  constructor(private userService: UserService, private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  contactus(){
    if (this.contact.useremail == undefined || this.contact.useremail == '' ||
    this.contact.userphone == undefined || this.contact.userphone == '' ||
    this.contact.usertext == undefined || this.contact.usertext == '') {
    this.displaycontacterrors = 'flex';
  } else {
    this.userService.contact(this.contact).subscribe();
    this.goToHome();
  }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
