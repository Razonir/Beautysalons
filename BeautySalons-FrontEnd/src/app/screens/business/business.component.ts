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

  gender:any;
  background = 'linear-gradient(90deg, #6a18c7, #9d69da)'
  color = '#6a18c7'


  businessData: any;
  bcitytype: any;
  itype:any;

  constructor(private router: Router, private businessService: BusinessService) { }
  ngOnInit(): void {
    this.itype = history?.state?.data?.name;
    if(this.itype == undefined){
      this.itype = 'הכל';
    }
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female')
    }else{
      this.background = 'linear-gradient(45deg, #181818, #000)';
      this.color = 'black';
    }
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

  itypecheck(itype:string){
    if(this.itype == 'הכל'){
      return true;
    }
    if(itype==this.itype){
        return true;
    }
    return false;
  }
}
