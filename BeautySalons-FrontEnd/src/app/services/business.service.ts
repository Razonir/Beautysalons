import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Business } from '../model/business';
import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private baseURL = "http://localhost:3001/business/";

  constructor(private httpClient: HttpClient) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createBusiness(business: Business){
    let registerUrl = this.baseURL+'createBusiness'
    return this.httpClient.post<any>(`${registerUrl}`,business);
  }
  
  getAll(){
    return this.httpClient.get(this.baseURL);
  }

  getBusinessById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }

  addLike(bid: any){
    let url = this.baseURL+'like/'+bid;
    return this.httpClient.get(url);
  }
  addView(bid: any){
    let url = this.baseURL+'view/'+bid;
    return this.httpClient.get(url);
  }
}