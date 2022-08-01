import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private userService:UserService,
              private router:Router){}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.userService.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}