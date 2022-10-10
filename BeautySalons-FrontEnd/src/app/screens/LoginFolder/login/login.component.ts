import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef ,OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  displayPopup = 'none';
  moveup = '0';
  forget = 'translateXs(100vw)';
  register = 'translateXs(100vw)';
  user: User = new User();
  userforget: User = new User();
  userlogin: User = new User();
  errorlogin = '';
  

  constructor(private userService: UserService,private elementRef: ElementRef,private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {    
  }



  showForget(){
    this.forget = 'translateX(0vw)';
  }
  showregister(){
    this.register = 'translateX(0vw)';
  }
  hideForget(){
    this.forget = 'translateX(100vw)';
  }
  hideregister(){
    this.register = 'translateX(100vw)';
  }

  signup() {
      this.userService.createUser(this.user).subscribe(
        response => this.goToHome(),
        error => console.error('Error!', error)
      );
    
  }

  login() {
      this.userService.login(this.userlogin).subscribe(
        response => {
            localStorage.setItem("token", response.token),
            this.goToHome()
        },
        error => {
          this.errorlogin = error.error.error.message;
        }
      );
    
  }
  forgetpassowrd() {
      this.userService.resetpassword(this.userforget).subscribe(
        response => this.refreshpage(),
        error => console.error('Error!', error)
      );
    
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  refreshpage() {
    this.router.navigate(['']);
  }
}
