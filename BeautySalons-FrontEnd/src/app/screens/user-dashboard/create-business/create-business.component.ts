import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss']
})
export class CreateBusinessComponent implements OnInit {

  constructor(private businessService: BusinessService, private router: Router) { }

  business: Business = new Business();
  displylcraeteerrors = 'none';

  ngOnInit(): void {
  }

  create() {
    if (this.business.bname == undefined || this.business.bname == '' ||
        this.business.bdescriptions == undefined || this.business.bdescriptions == '' ||
        this.business.bdescriptionl == undefined || this.business.bdescriptionl == '' ||
        this.business.bgender == undefined || this.business.bgender == '' ||
        this.business.barea == undefined || this.business.barea == '' ||
        this.business.bcity == undefined || this.business.bcity == '' ||
        this.business.baddress == undefined || this.business.baddress == '' ||
        this.business.bphone == undefined || this.business.bphone == '' ||
        this.business.bsubject == undefined || this.business.bsubject == '') {
      this.displylcraeteerrors = "flex";
    } else {
      console.log(this.business);
      this.business.uid = Number(localStorage.getItem('uid'));
      this.businessService.createBusiness(this.business).subscribe(
        response => this.goToHome(),
        error => console.error('Error!', error)
      );
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
