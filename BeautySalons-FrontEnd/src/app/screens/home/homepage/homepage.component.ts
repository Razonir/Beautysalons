import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  topTitle = 'אתר מותאם לנשים'
  background = 'url(/assets/homebgblack.jpg)';
  color = 'black'
  businessData:any;
  gender: any;
  constructor(private businessService: BusinessService) { }
  ngOnInit(): void {
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female');
    }else{
      this.topTitle = 'אתר מותאם לגברים';
      this.background = 'url(/assets/man.jpg)';
      this.color = 'black';

    }
  
    this.businessService.getAll().subscribe((data)=>{
      this.businessData = data;
      this.businessData = this.businessData.filter((d: { bgender: any; }) => d.bgender == this.gender);
    });
  }

}
