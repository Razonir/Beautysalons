import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from '../model/photos';
import { serverUrl } from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {


  private baseURL = serverUrl.url + "photos/";
  constructor(private httpClient: HttpClient) { }

  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  createPhoto(photos: Photos){
    let createUrl = this.baseURL+'create'
    return this.httpClient.post<any>(`${createUrl}`,photos);
  }

  getByBid(bid: any){
    let url = this.baseURL+bid;
    return this.httpClient.get(url);
  }

  deleteByPid(pid:any){
    let url = this.baseURL+'delete/'+pid;
    return this.httpClient.delete(url);
  }
}
