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

  user: User = new User();
  userlogin: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }


  show(){
    this.displayPopup = 'flex';
  }
  hidePopup(){
    this.displayPopup = 'none';
  }
  onClickmoveup(){
    this.moveup = '-600px';
    this.displayStep = 'flex';
  }
  backStep(){
    this.displayStep = 'none';
    this.moveup = '0px'
  }
  signup(){
    console.log(this.user);
  }

  login(){
    console.log(this.userlogin)
  }
}
