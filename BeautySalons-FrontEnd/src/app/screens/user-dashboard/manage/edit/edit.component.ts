import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  business: Business = new Business();
  data: any;
  constructor(
    private businessService: BusinessService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['bid'];
    this.businessService.getBusinessById(id).subscribe((data) => {
      this.data = data;
      this.business.bname = this.data[0].bname;
      this.business.bgender = this.data[0].bgender;
      this.business.barea = this.data[0].barea;
      this.business.bcity = this.data[0].bcity;
      this.business.baddress = this.data[0].baddress;
      this.business.bphone = this.data[0].bphone;
      this.business.bsubject = this.data[0].bsubject;
      this.business.bdescriptions = this.data[0].bdescriptions;
      this.business.instegram = this.data[0].instegram;
    });
  }

  edit() {
    this.business.bid = this.route.snapshot.params['bid'];
    this.businessService.updateById(this.business).subscribe(
      (response) => this.goToHome(),
      (error) => console.error('Error!', error)
    );
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
