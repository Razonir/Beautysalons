import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:3001/user/";
  constructor(private httpClient: HttpClient) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createUser(user: User){
    let registerUrl = this.baseURL+'createUser'
    return this.httpClient.post<any>(`${registerUrl}`,user);
  }

  updateById(user: User){
    let registerUrl = this.baseURL+'update'
    return this.httpClient.post<any>(`${registerUrl}`,user);
  }

  login(user: User){
    let login = this.baseURL+'login'
    return this.httpClient.post<any>(`${login}`,user);
  }
  
  getUserById(id: any){
    let getUserById = this.baseURL+'user/'+id;
    return this.httpClient.get(getUserById);
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
    return (!!localStorage.getItem('token') && !!localStorage.getItem('uid'));
  }

}