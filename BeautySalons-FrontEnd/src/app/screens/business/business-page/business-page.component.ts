import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { ReviewService } from 'src/app/services/review.service';
import { PriceingService } from 'src/app/services/priceing.service';
import { UserService } from 'src/app/services/user.service';
import { Review } from 'src/app/model/review';
import { Business } from 'src/app/model/business';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Priceing } from 'src/app/model/priceing';
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
  priceCreate: Priceing = new Priceing();
  reviewserror = 'none';
  priceserror = 'none';
  userid: any;
  genderdata: any;
  female = false;
  uni = false;
  male = false;
  uid:any;
  buid:any;
  background = 'linear-gradient(90deg, #6a18c7, #9d69da)'
  color = '#6a18c7'
  gender: any;
  reportshow = 'block';
  reporttext = 'דיווח על תוכן שאינו תקין'
  contact={
    useremail : "",
    userphone : "",
    usertext : "",
    
   }
   displaycontacterrors = "none";


  constructor(private router: Router,
    private businessService: BusinessService,
    private reviewService: ReviewService,
    private priceingService: PriceingService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = localStorage.getItem('uid');
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female')
    }else{
      this.background = 'linear-gradient(90deg, #181818, #000)';
      this.color = 'black';
    }
    const id = +this.route.snapshot.params['bid'];
    this.businessService.getBusinessById(id).subscribe((data) => {
      this.data = data;
      this.data = this.data[0];
      this.buid = this.data.uid;
      this.genderdata = this.data.bgender;
      if (this.genderdata == 'male') {
        this.male = true;
      } else if (this.genderdata == 'female') {
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
    if (this.reviewCreate.review == undefined ||
      this.reviewCreate.reviewtext == undefined || this.reviewCreate.reviewtext == "") {
        this.reviewserror = 'flex';
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

  

  addprice() {
    if (this.priceCreate.price == undefined ||
      this.priceCreate.service == undefined || this.priceCreate.service == "") {
        this.priceserror = 'flex';
      } else {
      const id = +this.route.snapshot.params['bid'];
      this.priceCreate.bid = id;
      this.priceingService.createPrice(this.priceCreate).subscribe(
        response => this.refreshpage(),
        error => console.error('Error!', error)
      );
    }
  }

  contactus(){
    if (this.contact.useremail == undefined || this.contact.useremail == '' ||
    this.contact.userphone == undefined || this.contact.userphone == '' ||
    this.contact.usertext == undefined || this.contact.usertext == '') {
    this.displaycontacterrors = 'flex';
  } else {
    this.userService.contact(this.contact).subscribe();
    this.reportshow = 'none';
    this.reporttext = 'דיווח נקלט בהצלחה';
  }
  }

  goToHome() {
    this.router.navigate(['/']);
  }
  refreshpage() {
    location.reload()
  }

}
