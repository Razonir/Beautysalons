import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  businessData: any;
  bcitytype: any;
  constructor(private router: Router, private businessService: BusinessService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.params['bname'];
    this.businessService.getBusinessById(id).subscribe((data) => {
      this.businessData = data;
      console.log(this.businessData)
    });
  }


}
