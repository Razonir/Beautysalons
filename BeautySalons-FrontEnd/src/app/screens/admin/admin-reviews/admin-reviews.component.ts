import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-admin-reviews',
  templateUrl: './admin-reviews.component.html',
  styleUrls: ['./admin-reviews.component.scss']
})
export class AdminReviewsComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  reviews:any;
  ngOnInit(): void {
    this.reviewService.getAll().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

}
