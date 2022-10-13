import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";
import { serverUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  private baseURL = serverUrl.url + "user/";
  constructor(private httpClient: HttpClient) { }

  createUser(user: User){
    let registerUrl = this.baseURL+'createUser'
    return this.httpClient.post<any>(`${registerUrl}`,user);
  }

  updateByJWT(user: User, token:any){
    let registerUrl = this.baseURL+'update'
    return this.httpClient.post<any>(`${registerUrl}`,user ,{
      headers: new HttpHeaders().set('Authorization', token),
    });
  }

  login(user: User){
    let login = this.baseURL+'login'
    return this.httpClient.post<any>(`${login}`,user);
  }
  
  getUserByToken(token:any){
    let getUserByToken = this.baseURL+'user/';
    return this.httpClient.get(getUserByToken,{
      headers: new HttpHeaders().set('Authorization', token),
    });
  }

  allUsers(){
    let users = this.baseURL+'users'
    return this.httpClient.get(users);
  }

  resetpassword(userforget: User){
    let resetpassword = this.baseURL+'resetpassword'
    return this.httpClient.post<any>(`${resetpassword}`,userforget);
  }

  contact(user: any){
    let baseurl = this.baseURL+'contact'
    return this.httpClient.post<any>(`${baseurl}`,user);
  }

  loggedIn(){
    return (!!localStorage.getItem('token'));
  }

  isAdmin(){
    this.token = localStorage.getItem('token');
    if (this.token!=undefined){
      this.token = atob(this.token.split('.')[1])
      this.token = JSON.parse(this.token);
      
      if(this.token.role == 'admin'){
        return false;
      }
    }
    return true;
  }
}