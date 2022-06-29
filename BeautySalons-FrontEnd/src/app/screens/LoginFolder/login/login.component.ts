import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import * as confetti from 'canvas-confetti';
import { Component, ElementRef, Renderer2 ,OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

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

  constructor(private userService: UserService ,private renderer2: Renderer2,private elementRef: ElementRef,private router: Router) { }

  ngOnInit(): void {
    console.log(this.userlogin.useremail)
    
  }

  public surprise(): void {
 
    const canvas = this.renderer2.createElement('canvas');
 
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
 
    const myConfetti = confetti.create(canvas, {
      resize: true // will fit all screen sizes
    });
 
    myConfetti();
   }
  show() {
    this.displayPopup = 'flex';
  }
  hidePopup() {
    this.displayPopup = 'none';
  }
  onClickmoveup() {
    if (this.user.useremail == undefined || this.user.useremail == '' ||
      this.user.userfname == undefined || this.user.userfname == '' ||
      this.user.userlname == undefined || this.user.userlname == '' ||
      this.user.userpassword == undefined || this.user.userpassword == '' ||
      this.user.userphone == undefined || this.user.userphone == '') {
      this.displysignuperrors = 'flex';
    } else {
      this.moveup = '-600px';
      this.displayStep = 'flex';
      this.displysignuperrors = 'none';

    }
  }
  backStep() {
    this.displayStep = 'none';
    this.moveup = '0px'
  }
  signup() {
    if (this.user.usergender == undefined || this.user.usergender == '' ||
      this.user.usercity == undefined || this.user.usercity == '' ||
      this.user.useraddress == undefined || this.user.useraddress == '') {
      this.displysignuperrors = 'flex';
    } else {
      console.log(this.user);
      this.surprise();
      this.userService.createUser(this.user).subscribe(
        response => this.goToHome(),
        error => console.error('Error!', error)
      );
    }
  }

  login() {

    if (this.userlogin.useremail == undefined || this.userlogin.useremail == '' ||
      this.userlogin.userpassword == undefined || this.userlogin.userpassword == '') {
      this.displyloginerrors = 'flex';
    } else {
      console.log(this.userlogin);
      this.userService.login(this.userlogin).subscribe(
        response => {
          localStorage.setItem("uid", response.uid),
            localStorage.setItem("token", response.token),
            this.goToHome()
        },
        error => console.error('Error!', error)
      );
    }
  }
  goToHome() {
    this.router.navigate(['']);
  }
}
