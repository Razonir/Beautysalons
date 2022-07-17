import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { ReviewService } from 'src/app/services/review.service';
import { PriceingService } from 'src/app/services/priceing.service';
import { UserService } from 'src/app/services/user.service';
import { Review } from 'src/app/model/review';
import { Business } from 'src/app/model/business';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  data: any;
  reviews: any;
  prices: any;
  bcitytype: any;
  user: any;
  reviewCreate: Review = new Review();
  reviewserror: any;
  userid: any;
  gender: any;
  female = false;
  uni = false;
  male = false;


  constructor(private router: Router,
    private businessService: BusinessService,
    private reviewService: ReviewService,
    private priceingService: PriceingService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['bid'];
    this.businessService.getBusinessById(id).subscribe((data) => {
      this.data = data;
      this.gender = this.data.business[0].bgender;
      if (this.gender == 'זכר') {
        this.male = true;
      } else if (this.gender == 'נקבה') {
        this.female = true;
      }else{
        this.uni = true;
      }

    });

    this.businessService.addView(id).subscribe();

    this.reviewService.getReviewById(id).subscribe((reviews) => {
      this.reviews = reviews;
    })

    this.priceingService.getPriceingById(id).subscribe((price) => {
      this.prices = price;
    })


  }


  add() {
    console.log(this.reviewCreate)
    if (this.reviewCreate.review == undefined ||
      this.reviewCreate.reviewtext == undefined || this.reviewCreate.reviewtext == "") {
    } else {
      const id = +this.route.snapshot.params['bid'];
      this.reviewCreate.bid = id;
      if (localStorage.getItem('uid') != undefined) {
        this.userid = localStorage.getItem('uid');
        this.reviewCreate.uid = this.userid;
      }
      this.reviewService.createReview(this.reviewCreate).subscribe(
        response => this.refreshpage(),
        error => console.error('Error!', error)
      );
    }
  }

  refreshpage() {
    location.reload()
  }

}
