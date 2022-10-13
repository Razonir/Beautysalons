import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  token: any;
  user:any = {
    userfname: ""
  }
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userService.getUserByToken(this.token).subscribe((data)=>{
      this.user = data;
      this.user = this.user[0];
    })
  }


}
