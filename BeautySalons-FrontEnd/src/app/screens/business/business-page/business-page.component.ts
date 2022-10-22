import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { ReviewService } from 'src/app/services/review.service';
import { PriceingService } from 'src/app/services/priceing.service';
import { UserService } from 'src/app/services/user.service';
import { PhotosService } from 'src/app/services/photos.service';
import { Review } from 'src/app/model/review';
import { Priceing } from 'src/app/model/priceing';
import { HttpClient } from '@angular/common/http';
import { Photos } from 'src/app/model/photos';

import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss'],
})
export class BusinessPageComponent implements OnInit {
  data: any;
  reviews: any;
  prices: any;
  bcitytype: any;
  user: any;
  reviewCreate: Review = new Review();
  priceCreate: Priceing = new Priceing();
  priceUpdate: Priceing = new Priceing();
  userid: any;
  genderdata: any;
  female = false;
  uni = false;
  male = false;
  uid: any;
  buid: any;
  photos: any;
  background = 'linear-gradient(90deg, #6a18c7, #9d69da)';
  color = '#6a18c7';
  gender: any;
  addpricedisplay = 'none';
  popupdisplay = 'none';
  link: any;
  token: any;
  icondisplay = 'block';
  blackbackground: any;
  load = true;
  constructor(
    private router: Router,
    private businessService: BusinessService,
    private reviewService: ReviewService,
    private photosService: PhotosService,
    private priceingService: PriceingService,
    private userService: UserService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.link = window.location.href;
    this.token = localStorage.getItem('token');
    this.userService.getUserByToken(this.token).subscribe((user) => {
      this.uid = user;
      this.uid = this.uid[0].userid;
    });
    this.gender = localStorage.getItem('gender');
    if (this.gender == null || this.gender == 'female') {
      this.gender = 'female';
      localStorage.setItem('gender', 'female');
    } else {
      this.background = 'linear-gradient(90deg, #181818, #000)';
      this.color = 'black';
    }
    const id = +this.route.snapshot.params['bid'];
    this.businessService.getBusinessById(id).subscribe((data) => {
              this.load = false;

      this.data = data;
      this.data = this.data[0];
      this.buid = this.data.uid;
      this.titleService.setTitle(this.data.bname)
      this.genderdata = this.data.bgender;
      this.blackbackground = 'url(' + this.data.blogo + ')';
      if (this.genderdata == 'male') {
        this.male = true;
      } else if (this.genderdata == 'female') {
        this.female = true;
      } else {
        this.uni = true;
      }
    });

    this.businessService.addView(id).subscribe();

    this.reviewService.getReviewById(id).subscribe((reviews) => {
      this.reviews = reviews;
    });

    this.priceingService.getPriceingById(id).subscribe((price) => {
      this.prices = price;
    });
    this.photosService.getByBid(id).subscribe((photos) => {
      this.photos = photos;
    });
  }
  reviewE = 'פרסם ביקורת';

  add() {
    const id = +this.route.snapshot.params['bid'];
    this.reviewCreate.bid = id;
    if (localStorage.getItem('token') != undefined) {
      this.reviewCreate.uid = this.uid;
      this.reviewService.createReview(this.reviewCreate).subscribe(
        (response) => this.reloadReview(),
        (error) => console.error('Error!', error)
      );
    } else {
      this.reviewE = 'זמין למשתמשים רשומים בלבד';
    }
  }

  addprice() {
    const id = +this.route.snapshot.params['bid'];
    this.priceCreate.bid = id;
    this.priceingService.createPrice(this.priceCreate).subscribe(
      (response) => this.reloadPrice(),
      (error) => console.error('Error!', error)
    );
  }

  editprice(id: any) {
    this.priceUpdate.pid = id;
    this.priceingService.updateByPid(this.priceUpdate).subscribe(
      (response) => this.reloadPrice(),
      (error) => console.error('Error!', error)
    );
  }

  removeprice(id: any) {
    this.priceingService.removeByPid(id).subscribe(
      (response) => this.reloadPrice(),
      (error) => console.error('Error!', error)
    );
  }

  goToHome() {
    this.router.navigate(['/']);
  }
  refreshpage() {
    location.reload();
  }

  reloadReview(){
    const id = +this.route.snapshot.params['bid'];
    this.reviewService.getReviewById(id).subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  reloadPrice(){
    const id = +this.route.snapshot.params['bid'];
    this.priceingService.getPriceingById(id).subscribe((price) => {
      this.prices = price;
    });
  }

  photo: any;
  photoOb: Photos = new Photos();

  selectedFile: any;
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('upload_preset', 'otpixt53');
    fd.append('file', this.selectedFile);
    this.http
      .post('https://api.cloudinary.com/v1_1/decne4dss/image/upload', fd)
      .subscribe((res) => {
        this.photo = res;
        this.photo = this.photo.secure_url;
        this.photoOb.url = this.photo;
        this.photoOb.bid = this.route.snapshot.params['bid'];
        this.photosService.createPhoto(this.photoOb).subscribe();
        this.refreshpage();
      });
  }

  haveprice() {
    if (this.prices == undefined || this.prices.length == 0) {
      return false;
    }
    return true;
  }

}
