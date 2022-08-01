import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User = new User();
  displysignuperrors = 'none';
  data:any;
  userid:any;

  constructor(private userService: UserService, private router: Router,private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem('uid');
    this.userService.getUserById(this.userid).subscribe((data)=>{
      this.data = data;
      this.user.userfname = this.data[0].userfname;
      this.user.userlname = this.data[0].userlname;
      this.user.usergender = this.data[0].usergender;
      this.user.usercity = this.data[0].usercity;
      this.user.useraddress = this.data[0].useraddress;
      this.user.userphone = this.data[0].userphone;
    });
  }
  


  edit() {
    if (  this.user.userfname == undefined || this.user.userfname == '' ||
    this.user.userlname == undefined || this.user.userlname == '' ||
    this.user.usergender == undefined || this.user.usergender == '' ||
    this.user.userphone == undefined || this.user.userphone == '') {
      this.displysignuperrors = "flex";
    } else {
      this.user.userid = this.userid ;
      console.log(this.user)
      this.userService.updateById(this.user).subscribe(
        response => this.goToHome(),
        error => console.error('Error!', error)
      );
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }

}
