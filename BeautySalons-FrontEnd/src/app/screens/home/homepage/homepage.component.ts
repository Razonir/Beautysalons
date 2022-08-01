import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  topTitle = 'אתר מותאם לנשים'
  background = 'linear-gradient(90deg, #6a18c7, #9d69da)'
  color = '#6a18c7'
  businessData:any;
  gender: any;
  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female')
    }else{
      this.topTitle = 'אתר מותאם לגברים';
      this.background = 'linear-gradient(90deg, #181818, #000)';
      this.color = 'black';

    }
    this.businessService.getAll().subscribe((data)=>{
      this.businessData = data;
    });
  }

}
