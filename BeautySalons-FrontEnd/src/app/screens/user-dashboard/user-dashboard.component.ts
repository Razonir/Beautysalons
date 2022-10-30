import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  token: any;
  user: any = {
    userfname: '',
  };
  constructor(private userService: UserService,
    private titleService: Title
    ) {}

  ngOnInit(): void {
    this.titleService.setTitle("מכוני היופי של ישראל")
    if (sessionStorage.getItem('user') == undefined) {
      this.token = localStorage.getItem('token');
      this.userService.getUserByToken(this.token).subscribe((data) => {
        this.user = data;
        this.user = this.user[0];
        sessionStorage.setItem('user', JSON.stringify(this.user))

      });
    }else{
      this.user = JSON.parse(sessionStorage.getItem('user') || '')

    }
  }

  isAdmin() {
    return this.userService.isAdmin();
  }
}
