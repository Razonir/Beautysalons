import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact = {
    useremail: '',
    userphone: '',
    usertext: '',
    url: '',
  };

  submited='block';
  submitedb='none';
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  contactus() {
    this.contact.url = window.location.href;
    this.userService.contact(this.contact).subscribe();
    this.submited = 'none';
    this.submitedb = 'block';
  }

}
