import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Priceing } from '../model/priceing';
import { serverUrl } from './baseurl';
@Injectable({
  providedIn: 'root'
})
export class PriceingService {

  private baseURL = serverUrl.url + "priceing/";
  constructor(private httpClient: HttpClient) { }

  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  createPrice(price: Priceing){
    let createUrl = this.baseURL+'create'
    return this.httpClient.post<any>(`${createUrl}`,price);
  }
  
  updateByPid(price: Priceing){
    let url = this.baseURL+'update'
    return this.httpClient.post<any>(`${url}`,price);
  }

  
  removeByPid(pid: any){
    let url = this.baseURL+'deleteid/' + pid
    return this.httpClient.delete(url);
  }

  getAll(){
    return this.httpClient.get(this.baseURL);
  }

  getPriceingById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }

}
