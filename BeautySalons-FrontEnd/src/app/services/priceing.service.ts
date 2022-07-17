import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Priceing } from '../model/priceing';
@Injectable({
  providedIn: 'root'
})
export class PriceingService {

  private baseURL = "http://localhost:3001/priceing/";
  constructor(private httpClient: HttpClient) { }

  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  createPrice(price: Priceing){
    let createUrl = this.baseURL+'create'
    return this.httpClient.post<any>(`${createUrl}`,price);
  }
  
  getAll(){
    return this.httpClient.get(this.baseURL);
  }

  getPriceingById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }

}
