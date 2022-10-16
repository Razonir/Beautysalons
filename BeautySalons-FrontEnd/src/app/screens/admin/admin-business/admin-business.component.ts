import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-admin-business',
  templateUrl: './admin-business.component.html',
  styleUrls: ['./admin-business.component.scss']
})
export class AdminBusinessComponent implements OnInit {

  businessData: any;
  bcitytype: any;
  token: any;
  constructor(private router: Router, private businessService: BusinessService) { }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.businessService.getAll().subscribe((data)=>{
      this.businessData = data;
    });
  }

  remove(bid: any){
    this.businessService.removeBusiness(bid).subscribe();
    location.reload()
  }

}