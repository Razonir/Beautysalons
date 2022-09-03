import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Business } from '../model/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private baseURL = "https://beautysalons-backend.herokuapp.com/business/";

  constructor(private httpClient: HttpClient) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createBusiness(business: Business){
    let registerUrl = this.baseURL+'createBusiness'
    return this.httpClient.post<any>(`${registerUrl}`,business);
  }
  updateById(business: Business){
    let registerUrl = this.baseURL+'updateById'
    return this.httpClient.post<any>(`${registerUrl}`,business);
  }

  removeBusiness(bid: any){
    let url = this.baseURL+'remove/' + bid
    return this.httpClient.delete(url);
  }
  getAll(){
    return this.httpClient.get(this.baseURL);
  }

  getBusinessById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }

  getBusinessByUserId(uid: any){
    let url = this.baseURL+"user/"+uid;
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