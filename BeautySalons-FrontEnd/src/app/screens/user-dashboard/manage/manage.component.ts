import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {


  businessData: any;
  bcitytype: any;
  token: any;
  constructor(private router: Router, private businessService: BusinessService) { }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.businessService.getBusinessByUserJWT(this.token).subscribe((data)=>{
      this.businessData = data;
    });
  }

  remove(bid: any){
    this.businessService.removeBusiness(bid).subscribe();
    location.reload()
  }

}
