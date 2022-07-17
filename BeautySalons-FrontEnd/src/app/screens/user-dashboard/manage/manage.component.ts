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
  uid: any;
  constructor(private router: Router, private businessService: BusinessService) { }
  ngOnInit(): void {
    this.uid = localStorage.getItem('uid');
    this.businessService.getBusinessByUserId(this.uid).subscribe((data)=>{
      this.businessData = data;
      console.log(this.businessData)
    });

  }

  edit(bid: any){
    alert("edit" + bid)
  }

  remove(bid: any){
    this.businessService.removeBusiness(bid).subscribe();
    location.reload()
  }

}
