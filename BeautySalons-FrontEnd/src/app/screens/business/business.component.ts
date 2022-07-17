import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {


  businessData: any;
  bcitytype: any;
  constructor(private router: Router, private businessService: BusinessService) { }
  ngOnInit(): void {
    this.businessService.getAll().subscribe((data)=>{
      this.businessData = data;
    });

  }

  city(icity:string){
    if(this.bcitytype == undefined){
      return true;
    }
    let len = this.bcitytype.length; 
    if(icity.substring(0,len)==this.bcitytype){
        return true;
    }
    return false;
  }
}
