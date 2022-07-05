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
}