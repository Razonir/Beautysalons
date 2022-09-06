import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Business } from '../model/business';
import { serverUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private baseURL = serverUrl.url + "business/";

  constructor(private httpClient: HttpClient) { }

  createBusiness(business: Business, token:any){
    let registerUrl = this.baseURL+'createBusiness'
    return this.httpClient.post<any>(`${registerUrl}`,business ,{
      headers: new HttpHeaders().set('Authorization', token),
    });
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

  getBusinessByUserJWT(token: any){
    let url = this.baseURL+"user/";
    return this.httpClient.get(url ,{
      headers: new HttpHeaders().set('Authorization', token),
    });
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