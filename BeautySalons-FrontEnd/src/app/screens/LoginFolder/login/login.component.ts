import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  displayPopup = 'none';
  moveup = '0';
  displayStep = 'none';
  displyloginerrors = 'none';
  displysignuperrors = 'none';
  user: User = new User();
  userlogin: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userlogin.useremail)
  }


  show(){
    this.displayPopup = 'flex';
  }
  hidePopup(){
    this.displayPopup = 'none';
  }
  onClickmoveup(){
    if(this.user.useremail==undefined || this.user.useremail=='' ||
    this.user.userfname==undefined || this.user.userfname=='' ||
    this.user.userlname==undefined || this.user.userlname=='' ||
    this.user.userpassword==undefined || this.user.userpassword=='' ||
    this.user.userphone==undefined || this.user.userphone==''){
      this.displysignuperrors = 'flex';
    }else{
      this.moveup = '-600px';
      this.displayStep = 'flex';
      this.displysignuperrors = 'none';

    }
  }
  backStep(){
    this.displayStep = 'none';
    this.moveup = '0px'
  }
  signup(){
    if(this.user.usergender==undefined || this.user.usergender=='' ||
    this.user.usercity==undefined || this.user.usercity=='' ||
    this.user.useraddress==undefined || this.user.useraddress==''){
      this.displysignuperrors = 'flex';
    }else{
      console.log(this.user);
    }
  }

  login(){
    this.displyloginerrors = 'flex';
    console.log(this.userlogin);
  }
}
