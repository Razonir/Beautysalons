import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Blog } from '../model/blog';
import { serverUrl } from './baseurl';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseURL =  serverUrl.url + "blog/";

  constructor(private httpClient: HttpClient) { }

  createBlog(blog: Blog){
    let registerUrl = this.baseURL+'create'
    return this.httpClient.post<any>(`${registerUrl}`,Blog);
  }

  removeBlog(bid: any,token:any){
    let url = this.baseURL+'remove/' + bid
    return this.httpClient.delete(url,{
      headers: new HttpHeaders().set('Authorization', token),
    });
  }
  getAll(){
    return this.httpClient.get(this.baseURL)
  };

  getBlogById(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }
}