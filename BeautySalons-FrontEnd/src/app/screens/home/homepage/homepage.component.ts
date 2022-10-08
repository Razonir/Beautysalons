import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  topTitle = 'אתר מותאם לנשים';
  background = 'url(/assets/homebgblack.jpg)';
  color = 'black';
  businessData: any;
  businessDataHair: any;
  businessDataEyebrows: any;
  businessDataTattoo: any;
  businessDataMakeup: any;
  businessDataCosmatics: any;
  businessDataNail: any;
  blogData: any;
  gender: any;
  bdata: any;
  token: any;
  load = true;
  bannerfirst = '../../../../assets/banners/bannermobile.jpg';
  bannersec = '../../../../assets/banners/bannermobile.jpg';
  constructor(
    private businessService: BusinessService,
    private blogService: BlogService
  ) {}
  ngOnInit(): void {
    this.gender = localStorage.getItem('gender');
    if (this.gender == null || this.gender == 'female') {
      this.gender = 'female';
      localStorage.setItem('gender', 'female');
    } else {
      this.topTitle = 'אתר מותאם לגברים';
      this.background = 'url(/assets/man.jpg)';
      this.color = 'black';
    }
    this.businessService.getAll().subscribe((data) => {
      this.load = false;
      this.businessData = data;
      this.businessData = this.businessData.filter(
        (d: { bgender: any }) => d.bgender == this.gender
      );
      this.businessDataHair = this.businessData.filter(
        (b: { bsubject: any }) => b.bsubject == 'מספרות'
      );
      this.businessDataEyebrows = this.businessData.filter(
        (b: { bsubject: any }) => b.bsubject == 'גבות'
      );
      this.businessDataTattoo = this.businessData.filter(
        (b: { bsubject: any }) => b.bsubject == 'קעקועים'
      );
      this.businessDataMakeup = this.businessData.filter(
        (b: { bsubject: any }) => b.bsubject == 'איפור'
      );
      this.businessDataCosmatics = this.businessData.filter(
        (b: { bsubject: any }) => b.bsubject == 'קוסמטיקה'
      );
      this.businessDataNail = this.businessData.filter(
        (b: { bsubject: any }) => b.bsubject == 'ציפורניים'
      );
    });
    this.blogService.getAll().subscribe((bdata) => {
      this.blogData = bdata;
    });
  }
}
