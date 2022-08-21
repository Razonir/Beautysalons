import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseURL = "https://beautysalons-backend.herokuapp.com/blog/";

  constructor(private httpClient: HttpClient) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  createBlog(blog: Blog){
    let registerUrl = this.baseURL+'create'
    return this.httpClient.post<any>(`${registerUrl}`,Blog);
  }

  removeBlog(bid: any){
    let url = this.baseURL+'remove/' + bid
    return this.httpClient.delete(url);
  }
  getAll(){
    return this.httpClient.get(this.baseURL);
  }

  getBlogById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }
}