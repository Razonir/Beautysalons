import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDetails:any = null;
  data:any
  token:any

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.userDetails = true;
    }else{
      this.userDetails = null;
    }
    if(localStorage.getItem('likes') == null){
      localStorage.setItem('likes','0,');
    }
  }
  signout(){
    return localStorage.clear(),  this.userDetails = null,  this.goToHome();
  }  
   menuShow() {
    document.getElementById("menu")?.classList.toggle("show");
  }
   menuClose() {
    document.getElementById("menu")?.classList.remove("show");
  }
  goToHome(){
    window.location.href = "/";
    }
}