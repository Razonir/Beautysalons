import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  userid: any;
  user: any;
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem('uid');
    this.userService.getUserById(this.userid).subscribe((data)=>{
      this.user = data;
      console.log(this.user)
    })
  }

}
