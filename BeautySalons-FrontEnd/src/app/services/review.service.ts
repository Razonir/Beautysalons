import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Review } from '../model/review';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseURL = "https://beautysalons-backend.herokuapp.com/review/";

  constructor(private httpClient: HttpClient) { }
  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createReview(review: Review){
    let createUrl = this.baseURL+'create'
    return this.httpClient.post<any>(`${createUrl}`,review);
  }
  
  getAll(){
    return this.httpClient.get(this.baseURL);
  }

  getReviewById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }

}
