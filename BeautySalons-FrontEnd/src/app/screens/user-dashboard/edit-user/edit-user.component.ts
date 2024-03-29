import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  data: any;
  token: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userService.getUserByToken(this.token).subscribe((data) => {
      this.data = data;
      this.user.userid = this.data[0].userid;
      this.user.userfname = this.data[0].userfname;
      this.user.userlname = this.data[0].userlname;
      this.user.userphone = this.data[0].userphone;
    });
  }

  edit() {
    this.userService.updateByJWT(this.user, this.token).subscribe(
      (response) => {
        sessionStorage.removeItem('user');
        this.goToHome();
      },
      (error) => console.error('Error!', error)
    );
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
