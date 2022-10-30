import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';
import { ActivatedRoute, Router } from '@angular/router';

import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  gender: any;
  background = 'linear-gradient(90deg, #6a18c7, #9d69da)';
  color = '#6a18c7';

  businessData: any;
  userT: any;

  category: any;
  load = true;
  businessDataHair: any;
  businessDataEyebrows: any;
  businessDataTattoo: any;
  businessDataMakeup: any;
  businessDataCosmatics: any;
  businessDataNail: any;
  lenbusinessData: any;
  lenbusinessDataHair: any;
  lenbusinessDataEyebrows: any;
  lenbusinessDataTattoo: any;
  lenbusinessDataMakeup: any;
  lenbusinessDataCosmatics: any;
  lenbusinessDataNail: any;
  displaybusinessDataHair = 'none';
  displaybusinessDataEyebrows = 'none';
  displaybusinessDataTattoo = 'none';
  displaybusinessDataMakeup = 'none';
  displaybusinessDataCosmatics = 'none';
  displaybusinessDataNail = 'none';
  categoryshow = 'none';
  categoryhide = 'none';
  business: any;
  constructor(
    private router: Router,
    private businessService: BusinessService,
    private route: ActivatedRoute,
    private titleService: Title

  ) {}
  ngOnInit(): void {
    this.titleService.setTitle("חיפוש עסקים")

    this.gender = localStorage.getItem('gender');
    if (this.gender == null || this.gender == 'female') {
      this.gender = 'female';
      localStorage.setItem('gender', 'female');
    }
    this.category = this.route.snapshot.queryParamMap.get('category');
    if (this.category == undefined) {
      this.categoryhide = 'flex';
      if (sessionStorage.getItem('getAll') == undefined) {
        this.businessService.getAll().subscribe((data) => {
          this.load = false;
          this.businessData = data;
          sessionStorage.setItem('getAll', JSON.stringify(this.businessData));
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
          this.lenbusinessData = this.businessData.length;
          this.lenbusinessDataHair = this.businessDataHair.length;
          this.lenbusinessDataEyebrows = this.businessDataEyebrows.length;
          this.lenbusinessDataTattoo = this.businessDataTattoo.length;
          this.lenbusinessDataMakeup = this.businessDataMakeup.length;
          this.lenbusinessDataCosmatics = this.businessDataCosmatics.length;
          this.lenbusinessDataNail = this.businessDataNail.length;
          if (this.lenbusinessDataHair > 0) {
            this.displaybusinessDataHair = 'block';
          }
          if (this.lenbusinessDataEyebrows > 0) {
            this.displaybusinessDataEyebrows = 'block';
          }
          if (this.lenbusinessDataTattoo > 0) {
            this.displaybusinessDataTattoo = 'block';
          }
          if (this.lenbusinessDataMakeup > 0) {
            this.displaybusinessDataMakeup = 'block';
          }
          if (this.lenbusinessDataCosmatics > 0) {
            this.displaybusinessDataCosmatics = 'block';
          }
          if (this.lenbusinessDataNail > 0) {
            this.displaybusinessDataNail = 'block';
          }
        });
      } else {
        this.load = false;
        this.businessData = JSON.parse(sessionStorage.getItem('getAll') || '')
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
        this.lenbusinessData = this.businessData.length;
        this.lenbusinessDataHair = this.businessDataHair.length;
        this.lenbusinessDataEyebrows = this.businessDataEyebrows.length;
        this.lenbusinessDataTattoo = this.businessDataTattoo.length;
        this.lenbusinessDataMakeup = this.businessDataMakeup.length;
        this.lenbusinessDataCosmatics = this.businessDataCosmatics.length;
        this.lenbusinessDataNail = this.businessDataNail.length;
        if (this.lenbusinessDataHair > 0) {
          this.displaybusinessDataHair = 'block';
        }
        if (this.lenbusinessDataEyebrows > 0) {
          this.displaybusinessDataEyebrows = 'block';
        }
        if (this.lenbusinessDataTattoo > 0) {
          this.displaybusinessDataTattoo = 'block';
        }
        if (this.lenbusinessDataMakeup > 0) {
          this.displaybusinessDataMakeup = 'block';
        }
        if (this.lenbusinessDataCosmatics > 0) {
          this.displaybusinessDataCosmatics = 'block';
        }
        if (this.lenbusinessDataNail > 0) {
          this.displaybusinessDataNail = 'block';
        }
      }
    } else {
      if (sessionStorage.getItem('getAll') == undefined) {
        this.businessService.getAll().subscribe((data) => {
          this.categoryshow = 'flex';
          this.categoryhide = 'none';
          this.load = false;
          this.businessData = data;
          sessionStorage.setItem('getAll', JSON.stringify(this.businessData));
          this.businessData = this.businessData.filter(
            (s: { bsubject: any }) => s.bsubject == this.category
          );
          if (this.businessData.length == 0) {
            this.businessData = data;
          }
          this.businessData = this.businessData.filter(
            (d: { bgender: any }) => d.bgender == this.gender
          );
        });
      } else {
        this.categoryshow = 'flex';
        this.categoryhide = 'none';
        this.businessData = JSON.parse(sessionStorage.getItem('getAll') || '');
        this.business = JSON.parse(sessionStorage.getItem('getAll') || '');
        this.load = false;
        this.businessData = this.businessData.filter(
          (s: { bsubject: any }) => s.bsubject == this.category
        );
        if (this.businessData.length == 0) {
          this.businessData = this.business;
        }
        this.businessData = this.businessData.filter(
          (d: { bgender: any }) => d.bgender == this.gender
        );
      }

    }
  }

  city(icity: string, baddress: string, bname: string) {
    if (this.userT == undefined) {
      return true;
    }
    let len = this.userT.length;
    let src = icity + baddress + bname;
    let res = this.userT.replace(/\s/g, '');
    src = src.toLowerCase();
    res = res.toLowerCase();
    src = src.replace(/\s/g, '');
    if (src.includes(res)) {
      return true;
    }
    return false;
  }

  step() {
    this.categoryshow = 'flex';
    this.categoryhide = 'none';
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.businessData = this.businessData.filter(
      (s: { bsubject: any }) => s.bsubject == this.category
    );
  }
  all() {
    this.categoryshow = 'flex';
    this.categoryhide = 'none';
  }
}
