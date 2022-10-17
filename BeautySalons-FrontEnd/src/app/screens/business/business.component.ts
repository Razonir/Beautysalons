import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  userT: any;
  category:any;
  load = true;
  businessDataHair: any;
  businessDataEyebrows: any;
  businessDataTattoo: any;
  businessDataMakeup: any;
  businessDataCosmatics: any;
  businessDataNail: any;
  lenbusinessDataHair: any;
  lenbusinessDataEyebrows: any;
  lenbusinessDataTattoo: any;
  lenbusinessDataMakeup: any;
  lenbusinessDataCosmatics: any;
  lenbusinessDataNail: any;
  displaybusinessDataHair='none';
  displaybusinessDataEyebrows='none';
  displaybusinessDataTattoo='none';
  displaybusinessDataMakeup='none';
  displaybusinessDataCosmatics='none';
  displaybusinessDataNail='none';
  categoryshow = 'none';
  categoryhide = 'none';
  constructor(private router: Router, private businessService: BusinessService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.category = this.route.snapshot.queryParamMap.get('category')
    if(this.category == undefined ){
      this.categoryhide = 'flex';

      this.businessService.getAll().subscribe((data)=>{
        this.load = false;
        this.businessData = data;
        this.businessData = this.businessData.filter((d: { bgender: any; }) => d.bgender == this.gender);
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
        this.lenbusinessDataHair = this.businessDataHair.length;
        this.lenbusinessDataEyebrows = this.businessDataEyebrows.length;
        this.lenbusinessDataTattoo = this.businessDataTattoo.length;
        this.lenbusinessDataMakeup = this.businessDataMakeup.length;
        this.lenbusinessDataCosmatics = this.businessDataCosmatics.length;
        this.lenbusinessDataNail = this.businessDataNail.length;
        if(this.lenbusinessDataHair>0){
          this.displaybusinessDataHair='block';
        }
        if(this.lenbusinessDataEyebrows>0){
          this.displaybusinessDataEyebrows='block';
        }
        if(this.lenbusinessDataTattoo>0){
          this.displaybusinessDataTattoo='block';
        }
        if(this.lenbusinessDataMakeup>0){
          this.displaybusinessDataMakeup='block';
        }
        if(this.lenbusinessDataCosmatics>0){
          this.displaybusinessDataCosmatics='block';
        }
        if(this.lenbusinessDataNail>0){
          this.displaybusinessDataNail='block';
        }
        
      });
    }else{
      this.businessService.getAll().subscribe((data)=>{
        this.categoryshow = 'flex';
        this.categoryhide = 'none';
        this.load = false;
        this.businessData = data;
        this.businessData = this.businessData.filter((d: { bgender: any; }) => d.bgender == this.gender);
        this.businessData = this.businessData.filter((s: { bsubject: any; }) => s.bsubject == this.category);
      });
    }
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female')
    }

  }

  city(icity:string,baddress:string,bname:string){
    if(this.userT == undefined){
      return true;
    }
    icity = icity.toLocaleLowerCase()
    baddress = baddress.toLocaleLowerCase()
    bname = bname.toLocaleLowerCase()
    this.userT = this.userT.toLocaleLowerCase()
    baddress = baddress.replace(" ", "")
    icity = icity.replace(" ", "")
    bname = bname.replace(" ", "")
    let len = this.userT.length; 

    if(icity.substring(0,len)==this.userT.replace(" ", "") || bname.substring(0,len)==this.userT.replace(" ", "")  || baddress.substring(0,len)==this.userT.replace(" ", "")){
        return true;
    }
    return false;
  }

  step(){
    this.categoryshow = 'flex';
    this.categoryhide = 'none';
    this.category = this.route.snapshot.queryParamMap.get('category')
    this.businessData = this.businessData.filter((s: { bsubject: any; }) => s.bsubject == this.category);

  }
}
